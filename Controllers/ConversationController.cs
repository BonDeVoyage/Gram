using Microsoft.AspNetCore.Mvc;
using messengerV2.Models;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;

namespace messengerV2.Controllers
{
    [Route("api/[controller]")]
    public class ConversationController : Controller
    {
        private readonly AppContext _context;
        public ConversationController(AppContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("[action]/{UserId:int}")]
        public async Task<IActionResult> Create(int UserId) 
        {
            Conversation conversation = await _context.Conversations.FirstOrDefaultAsync(c => c.UserId == UserId);
            if (conversation == null)
            {
                conversation = new Conversation();

                var username = User.Identity.Name;
                conversation.User = await _context.Users.FirstOrDefaultAsync(u => u.Username == username);

                conversation.Receiver = await _context.Users.FirstOrDefaultAsync(u => u.Id == UserId);

                _context.Conversations.Add(conversation);
                await _context.SaveChangesAsync();
            }
            return Json(conversation);
        }

        [HttpGet]
        [Route("{id:int}")]
        public async Task<IActionResult> Show(int id)
        {
            return Json(await _context.Conversations.Include(c=> c.User).Include(c=> c.Receiver).FirstOrDefaultAsync(c => c.Id == id));
        }

    }
}
