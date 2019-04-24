using Query.Business;
using Query.Models;
using Query.Common;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Claims;
using System.Web.Http;
using Microsoft.AspNet.Identity.Owin;
using System.Threading.Tasks;

namespace Query.WebAPI.Controllers
{

    [RoutePrefix("api/User")]
    public class UserController : ApiController
    {
        private readonly UserBL _userBL;
        private readonly CustomerBL _customerBL;
        public UserController()
        {
            _userBL = new UserBL();
            _customerBL = new CustomerBL();
        }
        [Authorize]
        [Route("AddCustomer")]
        public ResponseModel AddCostumer(CustomerModel customer)
        {
            ResponseModel res = new ResponseModel();
            if (_customerBL.AddCustomer(customer))
            {
                res.ErrorCode = 200;
                res.Message = QueryResource.SuccessfulMsg;
            }
            else
            {
                res.ErrorCode = (int)HttpStatusCode.InternalServerError;
                res.Message = QueryResource.InvalidResponse;
            }
            return res;
        }

        [Authorize]
        [Route("AddUser")]
        public ResponseModel AddUserManagement(UserManagementModel userm)
        {
            ResponseModel res = new ResponseModel();
            if (_customerBL.AddUserManagement(userm))
            {
                res.ErrorCode = 200;
                res.Message = QueryResource.SuccessfulMsg;
            }
            else
            {
                res.ErrorCode = (int)HttpStatusCode.InternalServerError;
                res.Message = QueryResource.InvalidResponse;
            }
            return res;
        }


        [Authorize]
        [Route("DeleteCustomer/{customerId}")]
        public ResponseModel DeleteCustomer(int customerId)
        {
            ResponseModel res = new ResponseModel();
            if (_customerBL.DeleteCustomers(customerId))
            {
                res.ErrorCode = 200;
                res.Message = QueryResource.SuccessfulMsg;
            }
            else
            {
                res.ErrorCode = (int)HttpStatusCode.InternalServerError;
                res.Message = QueryResource.InvalidResponse;
            }
            return res;
        }


        [Authorize]
        [Route("GetCustomer")]
        public List<CustomerModel> GetCustomer(int? parentId)
        {
            return _customerBL.GetCustomers(parentId).ToList();
        }

        [Authorize]
        [Route("GetUser")]
        public List<UserManagementModel> GetUsers(int? parentId)
        {
            return _customerBL.GetUsers(parentId).ToList();
        }

        [Authorize]
        [Route("GetCustomer")]
        private CustomerModel GetCustomerFromUserName(string username)
        {
            return _userBL.GetCustomerFromUserName(username);
        }

        [Route("Authenticate")]
        public LoginResponseModel Authenticate(UserModel login)
        {
            bool isUsernamePasswordValid = false;
            var objResponce = new LoginResponseModel();
            var objRes = new ResponseModel();
            var user = new UserModel();
            IEnumerable<ModuleModel> modules = _userBL.GetUserModules(login.Username);
            objResponce.Modules = modules;
            UserModel loginrequest = _userBL.GetUserFromUserName(login.Username);
            objResponce.User = loginrequest;
            if(loginrequest.Role != "SuperAdmin")
            {
                CustomerModel customer = GetCustomerFromUserName(login.Username);
                objResponce.Customer = customer;
            }
            if (loginrequest != null)
                isUsernamePasswordValid = loginrequest.Password == login.Password ? true : false;
            if (isUsernamePasswordValid)
            {
                string token = createToken(loginrequest.Username);
                objRes.Message = token;
                objRes.ErrorCode = (int)HttpStatusCode.OK;
                objResponce.Response = objRes;
                objResponce.User = loginrequest;
            }
            else
            {
                objRes.Message = QueryResource.InvalidResponse;
                objRes.ErrorCode = (int)HttpStatusCode.InternalServerError;
                objResponce.Response = objRes;
            }
            return objResponce;
        }


        private string createToken(string username)
        {
            //Set issued at date
            DateTime issuedAt = DateTime.UtcNow;
            //set the time when it expires
            DateTime expires = DateTime.UtcNow.AddDays(7);

            //http://stackoverflow.com/questions/18223868/how-to-encrypt-jwt-security-token
            var tokenHandler = new JwtSecurityTokenHandler();

            //create a identity and add claims to the user which we want to log in
            ClaimsIdentity claimsIdentity = new ClaimsIdentity(new[]
            {
                new Claim(ClaimTypes.Name, username)
            });

            const string sec = "401b09eab3c013d4ca54922bb802bec8fd5318192b0a75f201d8b3727429090fb337591abd3e44453b954555b7a0812e1081c39b740293f765eae731f5a65ed1";
            var now = DateTime.UtcNow;
            var securityKey = new Microsoft.IdentityModel.Tokens.SymmetricSecurityKey(System.Text.Encoding.Default.GetBytes(sec));
            var signingCredentials = new Microsoft.IdentityModel.Tokens.SigningCredentials(securityKey, Microsoft.IdentityModel.Tokens.SecurityAlgorithms.HmacSha256Signature);


            //create the jwt
            var token =
                (JwtSecurityToken)
                    tokenHandler.CreateJwtSecurityToken(issuer: "http://localhost:50191", audience: "http://localhost:50191",
                        subject: claimsIdentity, notBefore: issuedAt, expires: expires, signingCredentials: signingCredentials);
            var tokenString = tokenHandler.WriteToken(token);

            return tokenString;
        }
    }
}
