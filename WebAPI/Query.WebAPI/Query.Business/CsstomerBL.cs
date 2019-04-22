using Query.Data;
using Query.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Query.Business
{
    public class CustomerBL
    {
        private readonly CustomerClass _customer;
        private readonly UserManagementClass _userm;

        public CustomerBL()
        {
            _customer = new CustomerClass();
            _userm = new UserManagementClass();
        }

        public bool AddCustomer(CustomerModel customerModel)
        {
            return _customer.AddCustomer(customerModel);
        }

        public bool AddUserManagement(UserManagementModel userModel)
        {
            return _userm.AddUserManagement(userModel);
        }
        public IEnumerable<UserManagementModel> GetUsers(int? parentId)
        {
            return _userm.GetUserManagements(parentId);
        }
        public IEnumerable<CustomerModel> GetCustomers(int? parentId)
        {
            return _customer.GetCustomers(parentId);
        }

        public bool DeleteCustomers(int? customerId)
        {
            return _customer.DeleteCustomer(customerId);
        }
    }
}
