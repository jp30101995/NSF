//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Query.Data
{
    using System;
    using System.Collections.Generic;
    
    public partial class Module
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Url { get; set; }
        public string Icon { get; set; }
        public Nullable<int> ParentId { get; set; }
        public Nullable<int> ModuleOrder { get; set; }
    }
}
