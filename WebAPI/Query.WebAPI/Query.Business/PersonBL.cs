using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Query.Data;
using Query.Models;

namespace Query.Business
{
    public class PersonBL
    {
        private readonly PersonClass _person;
        public PersonBL()
        {
            _person = new PersonClass();
        }
        public bool AddPerson(PersonViewModel person)
        {
            return _person.AddPerson(person);
        }
        public IEnumerable<PersonModel> GetPersons(int personId)
        {
            return _person.GetPersons(personId);
        } 
    }
}
