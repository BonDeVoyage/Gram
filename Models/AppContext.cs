using Microsoft.EntityFrameworkCore;

namespace messengerV2.Models
{
    public class AppContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Conversation> Conversations { get; set; }
        public DbSet<Message> Messages { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Conversation>()
                        .HasOne(c => c.User)
                        .WithMany(u => u.Conversations)
                        .HasForeignKey(c => c.UserId);

            modelBuilder.Entity<Conversation>()
                       .HasOne(c => c.Receiver)
                       .WithMany(u=> u.IncomingConversations)
                       .HasForeignKey(c => c.ReceiverId);      
        }
        public AppContext(DbContextOptions<AppContext> options)
            :base(options)
        {
            Database.EnsureCreated();
        }
    }
}
