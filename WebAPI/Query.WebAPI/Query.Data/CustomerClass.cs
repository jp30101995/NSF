using Query.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Query.Data
{
    public class CustomerClass : BaseClass
    {
        private static Random random = new Random();
        public static string RandomString(int length)
        {
            const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            return new string(Enumerable.Repeat(chars, length)
              .Select(s => s[random.Next(s.Length)]).ToArray());
        }

        public bool AddCustomer(CustomerModel objCustomer)
        {
            using (var trans = _dbEntitites.Database.BeginTransaction())
            {
                try
                {
                    //Adding customer
                    var customer = new Customer();
                    var user = new User();
                    if (objCustomer.Id > 0)
                    {
                        customer = _dbEntitites.Customers.FirstOrDefault(x => x.Id == objCustomer.Id);
                        user = _dbEntitites.Users.FirstOrDefault(x => x.Username == objCustomer.Email);
                    }
                    //creating user for that customer
                    user.Username = objCustomer.Email;
                    user.Password = "test@123";
                    user.RoleId = 2;
                    _dbEntitites.Users.AddOrUpdate(user);

                    customer.Name = objCustomer.Name;
                    customer.Email = objCustomer.Email;
                    customer.ContactNo = objCustomer.ContactNo;
                    customer.CommunityName = objCustomer.CommunityName;
                    customer.Type = objCustomer.Type;
                    customer.ParentId = objCustomer.ParentId;
                    //customer.UserId = objCustomer.UserId;
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

        public bool DeleteCustomer(int? customerId)
        {
            using (var trans = _dbEntitites.Database.BeginTransaction())
            {
                try
                {
                    if (customerId == null)
                        return false;

                    //Adding customer
                    var customer = new Customer();
                    customer = _dbEntitites.Customers.FirstOrDefault(x => x.Id == customerId);

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

        public IEnumerable<CustomerModel> GetCustomers(GridModel model)
        {
            var customer = new Customer();
            //int? pid = 0;
            //if(parentId == 0)
            //    pid = null;
            //else
            //    pid = parentId;
            return from objCustomre in _dbEntitites.Customers
                   where objCustomre.ParentId == model.parentId && string.IsNullOrEmpty(model.param.search.value) ? true : 
                   (objCustomre.Name.Contains(model.param.search.value) || objCustomre.Email.Contains(model.param.search.value) || objCustomre.CommunityName.Contains(model.param.search.value) || objCustomre.ContactNo.Contains(model.param.search.value))
                   orderby objCustomre.Id descending
                   select new CustomerModel
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
