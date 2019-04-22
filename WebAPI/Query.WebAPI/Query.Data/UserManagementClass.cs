using Query.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Query.Data
{
    public class UserManagementClass : BaseClass
    {
        private static Random random = new Random();
        public static string RandomString(int length)
        {
            const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            return new string(Enumerable.Repeat(chars, length)
              .Select(s => s[random.Next(s.Length)]).ToArray());
        }

        public bool AddUserManagement(UserManagementModel objUserManagement)
        {
            using (var trans = _dbEntitites.Database.BeginTransaction())
            {
                try
                {
                    //Adding customer
                    var customer = new Customer();
                    var user = new User();
                    if (objUserManagement.Id > 0)
                    {
                        customer = _dbEntitites.Customers.FirstOrDefault(x => x.Id == objUserManagement.Id);
                        user = _dbEntitites.Users.FirstOrDefault(x => x.Username == objUserManagement.Email);
                    }
                    //creating user for that customer
                    user.Username = objUserManagement.Email;
                    user.Password = "test@123";
                    user.RoleId = 3;
                    _dbEntitites.Users.AddOrUpdate(user);

                    customer.Name = objUserManagement.Name;
                    customer.Email = objUserManagement.Email;
                    customer.ContactNo = objUserManagement.ContactNo;
                    customer.CommunityName = objUserManagement.CommunityName;
                    customer.Type = objUserManagement.Type;
                    customer.ParentId = objUserManagement.ParentId;
                    //customer.UserId = objUserManagement.UserId;
                    _dbEntitites.Customers.AddOrUpdate(customer);

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

        public bool DeleteUserManagement(int? userId)
        {
            using (var trans = _dbEntitites.Database.BeginTransaction())
            {
                try
                {
                    if (userId == null)
                        return false;

                    //Adding customer
                    var customer = new Customer();
                    customer = _dbEntitites.Customers.FirstOrDefault(x => x.Id == userId);

                    _dbEntitites.Customers.Remove(customer);

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

        public IEnumerable<UserManagementModel> GetUserManagements(int? parentId)
        {
            var customer = new Customer();
            //int? pid = 0;
            //if(parentId == 0)
            //    pid = null;
            //else
            //    pid = parentId;
            return from objCustomre in _dbEntitites.Customers
                   where objCustomre.ParentId == parentId
                   orderby objCustomre.Id descending
                   select new UserManagementModel
                   {
                       Id = objCustomre.Id,
                       Name = objCustomre.Name,
                       Email = objCustomre.Email,
                       ContactNo = objCustomre.ContactNo,
                       CommunityName = objCustomre.CommunityName,
                       Type = objCustomre.Type,
                       ParentId = objCustomre.ParentId
                   };
        }
    }
}
