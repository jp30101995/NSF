using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Query.Models
{
    public class UserManagementModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string ContactNo { get; set; }
        public string Password { get; set; }
        public string CommunityName { get; set; }
        public short Type { get; set; }
        public int? ParentId { get; set; }
        public string UserId { get; set; }
    }
}
