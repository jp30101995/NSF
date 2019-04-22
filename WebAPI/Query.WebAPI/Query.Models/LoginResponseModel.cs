using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Query.Models
{
    public class LoginResponseModel
    {
        public ResponseModel Response { get; set; }
        
        public UserModel User { get; set;}
        public CustomerModel Customer { get; set; }
        public IEnumerable<ModuleModel> Modules { get; set; }
    }
}
