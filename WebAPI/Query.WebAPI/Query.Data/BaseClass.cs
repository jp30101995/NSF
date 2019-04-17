using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Query.Data
{
    public class BaseClass
    {
        public readonly QueryDBEntities _dbEntitites;
        public BaseClass()
        {
            _dbEntitites = new QueryDBEntities();
        }
        public void Save()
        {
            _dbEntitites.SaveChanges();
        }

        
    }
}
