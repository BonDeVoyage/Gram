using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace messengerV2.Models
{
    public class Conversation
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public int ReceiverId { get; set; }
        [ForeignKey("User")]
        public int? UserId { get; set; }
        public User User { get; set; }
        public ICollection<Message> Messages { get; set; }
        public Conversation()
        {
            Messages = new List<Message>();
        }
    }
}
