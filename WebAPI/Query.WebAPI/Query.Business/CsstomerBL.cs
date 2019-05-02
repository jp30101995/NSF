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
        public IEnumerable<CustomerModel> GetCustomers(GridModel model)
        {
            var custs = _customer.GetCustomers(model);

            if (model.param.order.Count > 0)
            {
                foreach (var item in model.param.order)
                {

                    if (item.dir == "asc")
                    {
                        switch (item.column)
                        {
                            case 1:
                                custs = custs.OrderBy(x => x.Id);
                                break;
                            case 2:
                                break;

                            default:
                                break;
                        }
                    }
                    else
                    {

                    }
                }

            }
            return custs;
        }

        public bool DeleteCustomers(int? customerId)
        {
            return _customer.DeleteCustomer(customerId);
        }
    }
}
