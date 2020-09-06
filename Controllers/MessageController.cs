using Microsoft.AspNetCore.Mvc;
using messengerV2.Models;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.SignalR;

namespace messengerV2.Controllers
{
    [Route("api/conversation/{id:int}/[action]")]
    public class MessageController : Controller
    {
        private readonly AppContext _context;
        private readonly IHubContext<ConversationHub> _hubContext;
        public MessageController(AppContext context, IHubContext<ConversationHub> hubContext)
        {
            _context = context;
            _hubContext = hubContext;
        }
        [HttpPost]
        public async Task Send(int id, [FromBody] Message msg)
        {
            Conversation current = await _context.Conversations.FirstOrDefaultAsync(c => c.Id == id);
            msg.Conversation = current;
            
            var username = User.Identity.Name;
            msg.User = await _context.Users.FirstOrDefaultAsync(u => u.Username == username);
            
            msg.Created_At = System.DateTime.Now;
            _context.Messages.Add(msg);
            await _context.SaveChangesAsync();

            var receiver = (current.User == msg.User) ? await _context.Users.FirstOrDefaultAsync(u => u.Id == current.ReceiverId) : current.User;
            await _hubContext.Clients.User(receiver.Username).SendAsync("Receive", msg, username);
        }
        [HttpGet]
        [Route("{MsgId:int}")]
        public async Task<IActionResult> Get(int MsgId)
        {
            await _context.Messages.Include(msg => msg.Conversation).ToListAsync();
            await _context.Messages.Include(msg => msg.User).ToListAsync();
            return Json(await _context.Messages.FirstOrDefaultAsync(m => m.Id == MsgId)); 
        }
    }

    public class ConversationHub : Hub {}
}
