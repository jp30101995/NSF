using Query.Models;
using Query.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Query.Business;
namespace Query.WebAPI.Controllers
{
    [RoutePrefix("api/Person")]
    public class PersonController : ApiController
    {
        private readonly PersonBL _personBL;
        //addperson
        [Authorize]
        [Route("AddPerson")]
        public ResponseModel AddPerson(PersonViewModel person)
        {
            ResponseModel res = new ResponseModel();
            if (_personBL.AddPerson(person))
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

        //getpersons
        [Authorize]
        [Route("GetPerson")]
        public List<PersonModel> GetPerson(int personId)
        {
            return _personBL.GetPersons(personId).ToList();
        }
        //edit eprson
        //delete person

        //delete all persons (122,12122)
    }
}
