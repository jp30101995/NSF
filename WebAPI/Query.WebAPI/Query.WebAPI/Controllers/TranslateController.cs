using Query.Business;
using Query.Common;
using Query.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Query.WebAPI.Controllers
{
    [RoutePrefix("api/Translate")]
    public class TranslateController : ApiController
    {
        public readonly TranslationBL _translate;
        public TranslateController()
        {
            _translate = new TranslationBL();
        }

        [Route("srcToDest")]
        public ResponseModel srcToDest(string srcLang, string destLang)
        {
            ResponseModel res = new ResponseModel();
            if (_translate.Translate(srcLang, destLang))
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
    }
}
