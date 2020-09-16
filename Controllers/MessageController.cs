using Microsoft.AspNetCore.Mvc;
using messengerV2.Models;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
using System.Collections.Generic;
using System.Linq;

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
            Conversation current = await _context.Conversations.
                Include(c => c.Messages).
                Include(c => c.User).
                Include(c => c.Receiver).
                FirstOrDefaultAsync(c => c.Id == id);
            
            current.hasNewMessages = true;
            msg.Conversation = current;

            var username = User.Identity.Name;
            msg.User = await _context.Users.FirstOrDefaultAsync(u => u.Username == username);
            
            msg.Created_At = System.DateTime.Now;
            _context.Messages.Add(msg);
        
            await _context.SaveChangesAsync();
            await _hubContext.Clients.Users(current.Receiver.Username, current.User.Username).SendAsync("ReceiveMsg", current);

        }
    }

    public class ConversationHub : Hub {}

    public class CustomUserIdProvider : IUserIdProvider
    { 
        public virtual string GetUserId(HubConnectionContext connection)
        {
            return connection.User?.Identity.Name;
        }
    }

}
