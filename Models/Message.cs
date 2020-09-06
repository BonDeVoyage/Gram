using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace messengerV2.Models
{
    public class Message
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Text { get; set; }
        public DateTime Created_At { get; set; }
        public DateTime Updated_At { get; set; }
        [ForeignKey("User")]
        public int? UserId { get; set; }
        public User User { get; set; }
        [ForeignKey("Conversation")]
        public int? ConversationId { get; set; }
        public Conversation Conversation { get; set; } 
    }
}
