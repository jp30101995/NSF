using Query.Data;
using Query.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Query.Business
{
    public class UserBL
    {
        private readonly UserClass _user;
        public UserBL()
        {
            _user = new UserClass();
        }

        public bool AddUser(UserModel userModel)
        {
            return _user.AddUser(userModel);
        }

        public CustomerModel GetCustomerFromUserName(string username)
        {
            return _user.GetCustomerByUserName(username);
        }

        public UserModel GetUserFromUserName(string username)
        {
            return _user.GetUserFromUserName(username);
        }

        public IEnumerable<ModuleModel> GetUserModules(string username)
        {
            return _user.GetUserModules(username);
        }

    }
}
