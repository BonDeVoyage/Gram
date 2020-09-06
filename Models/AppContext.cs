using Microsoft.EntityFrameworkCore;

namespace messengerV2.Models
{
    public class AppContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Conversation> Conversations { get; set; }
        public DbSet<Message> Messages { get; set; }
        public AppContext(DbContextOptions<AppContext> options)
            :base(options)
        {
            Database.EnsureCreated();
        }
    }
}
