using BC = BCrypt.Net.BCrypt;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using messengerV2.Models;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using System.Collections.Generic;
using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;

namespace messengerV2.Controllers
{
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        private readonly AppContext _context;

        public UserController(AppContext context)
        {
            _context = context;
        }

        [HttpPost]
        [Route("[action]")]
        public async Task<IActionResult> Login([FromBody] User user)
        {
            User _user = await _context.Users.FirstOrDefaultAsync(u => u.Username == user.Username);

            if (user != null && BC.Verify(user.Password, _user.Password))
            {
                await Authenticate(user.Username);
                return Json("good");
            }
            ModelState.AddModelError("", "Username or password is not correct");
            return Json(ModelState);
        }

        [HttpPost]
        [Route("[action]")]
        public async Task<IActionResult> Register([FromBody] User user)
        {
            if (await _context.Users.FirstOrDefaultAsync(u => u.Username == user.Username) == null)
            {

                user.Password = BC.HashPassword(user.Password);
                _context.Users.Add(user);
                await _context.SaveChangesAsync();
                await Authenticate(user.Username);
                return Content(user.Username + " " + user.Password); //redirect
            }
            return Json(ModelState);
        }

        [Route("{Id:int}")]
        public async Task<IActionResult> Show(int Id)
        {
            User user = await _context.Users.FirstOrDefaultAsync(u => u.Id == Id);
            if (Id == user.Id) await _context.Users.Include(user => user.Conversations).ToListAsync();
            return Json(user);
        }
        private async Task Authenticate(string UserName)
        {
            var claims = new List<Claim>
            {
                new Claim(ClaimsIdentity.DefaultNameClaimType, UserName)
            };
            ClaimsIdentity id = new ClaimsIdentity(claims, "ApplicationCookie", ClaimsIdentity.DefaultNameClaimType, ClaimsIdentity.DefaultRoleClaimType);
            await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, new ClaimsPrincipal(id));
        }
        [Route("[action]")]
        public async Task Logout()
        {
            await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
        }

    }
}