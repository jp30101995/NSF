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
        public CustomerBL()
        {
            _customer = new CustomerClass();
        }

        public bool AddCustomer(CustomerModel customerModel)
        {
            return _customer.AddCustomer(customerModel);
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
