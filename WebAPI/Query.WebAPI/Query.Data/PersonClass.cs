using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Query.Models;
using System.Data.Entity.Migrations;

namespace Query.Data
{
    public class PersonClass : BaseClass
    {
        public IEnumerable<PersonModel> GetPersons(int? parentId)
        {
            var person = new Person();
            return from P in _dbEntitites.People
                   join R in _dbEntitites.Relations on P.Id equals R.FromPerson into r
                   from RE in r.DefaultIfEmpty()
                   where RE.FromPerson == parentId || RE.ToPerson == parentId
                   select new PersonModel
                   {
                       Id = P.Id,
                       FirstName = P.FirstName,
                       LastName = P.LastName,
                       Gender = P.Gender ?? 0,
                       MaritalStatus = P.MaritalStatus ?? 0,
                       Qualification = P.Education ?? 0,
                       JobType = P.JobType ?? 0
                   };
        }

        public bool AddPerson(PersonViewModel model)
        {
            var person = new Person();
            var relation = new Relation();
            if(model.person.Id > 0)
            {
                person = _dbEntitites.People.FirstOrDefault(x => x.Id == model.person.Id);
            }
            if(model.relation.Id > 0)
            {
                relation = _dbEntitites.Relations.FirstOrDefault(x => x.Id == model.relation.Id);
            }
            if(person == null || relation == null)
            {
                return false;
            }
            person.FirstName = model.person.FirstName;
            person.LastName = model.person.LastName;
            person.Gender = model.person.Gender;
            person.MaritalStatus = model.person.MaritalStatus;
            person.Education = model.person.Qualification;
            person.JobType = model.person.JobType;
            person = _dbEntitites.People.Add(person);


            relation.FromPerson = model.relation.FromPerson;
            relation.ToPerson = person.Id;
            relation.RelationType = model.relation.RelationType;
            _dbEntitites.Relations.AddOrUpdate(relation);

            Save();
            return true;
        }

        public bool DeletePerson(int id)
        {
            return true;
        }
    }
}
