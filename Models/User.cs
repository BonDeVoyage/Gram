using Newtonsoft.Json;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace messengerV2.Models
{
    public class User
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Avatar { get; set; }
        public string Username { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        [JsonIgnore]
        public string Password { get; set; }
        [JsonProperty("password")]
        private string PasswordAltSetter
        {
            set { Password = value; }   
        }
        public ICollection<Conversation> Conversations { get; set; }
        public User()
        {
            Conversations = new List<Conversation>();
        }
    }
}
