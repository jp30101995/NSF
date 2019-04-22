using Query.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Query.Data
{
    public class UserClass : BaseClass
    {

        public bool AddUser(UserModel objUser)
        {
            using (var trans = _dbEntitites.Database.BeginTransaction())
            {
                try
                {

                    var user = new User();
                    if (objUser.Id > 0)
                    {
                        user = _dbEntitites.Users.FirstOrDefault(x => x.Id == objUser.Id);
                    }
                    user.Username = objUser.Username;
                    user.Password = objUser.Password;
                    _dbEntitites.Users.AddOrUpdate(user);
                    Save();
                    trans.Commit();
                    return true;
                }
                catch (Exception ex)
                {
                    trans.Rollback();
                    return false;
                }
            }
        }


        public CustomerModel GetCustomerByUserName(string username)
        {
            var user = new User();
            CustomerModel obj = new CustomerModel();
            var uobj = _dbEntitites.Customers.FirstOrDefault(x => x.Email == username);
            if (uobj != null)
            {
                obj.Id = uobj.Id;
                obj.Email = uobj.Email;
                obj.ParentId = uobj.ParentId;
                obj.Name = uobj.Name;
                obj.CommunityName = uobj.CommunityName;
                return obj;
            }
            return null;
        }

        public IEnumerable<ModuleModel> GetUserModules(string username)
        {
            return from objModules in _dbEntitites.Modules
                   join moduleRights in _dbEntitites.ModuleRights on objModules.Id equals moduleRights.ModuleId
                   join users in _dbEntitites.Users on moduleRights.UserId equals users.Id
                   where users.Username == username
                   orderby objModules.ModuleOrder
                   select new ModuleModel
                   {
                       Id = objModules.Id,
                       Name = objModules.Name,
                       Icon = objModules.Icon,
                       Url = objModules.Url,
                       ParentId = objModules.ParentId
                   };
        }

        public UserModel GetUserFromUserName(string username)
        {
            var user = new User();
            UserModel obj = new UserModel();
            var uobj = _dbEntitites.Users.FirstOrDefault(x => x.Username == username);
            if (uobj != null)
            {
                obj.Id = uobj.Id;
                obj.Username = uobj.Username;
                obj.Password = uobj.Password;
                obj.Role = uobj.RoleId == 1 ? "SuperAdmin" : uobj.RoleId == 2 ? "Admin" : "User";
                return obj;
            }
            return null;
        }
    }
}
