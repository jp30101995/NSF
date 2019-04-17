using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Query.Models
{
    public class PersonViewModel
    {
        public PersonModel person { get; set; }
        public Relations relation { get; set; }
    }
    public class PersonModel
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public string LastName { get; set; }
        public int Gender { get; set; }
        public int Relation { get; set; }
        public int Qualification { get; set; }
        public int MaritalStatus { get; set; }
        public int JobType { get; set; }
        public DateTime DOB { get; set; }
        public Decimal Age { get; set; }
    }

    public class Relations
    {
        public int Id { get; set; }
        public int RelationType { get; set; }
        public int FromPerson { get; set; }
        public int ToPerson { get; set; }
    }
}
