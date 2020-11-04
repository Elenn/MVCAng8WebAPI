using System;
using System.Collections.Generic;
using System.Linq;
using System.Web; 
using System.ComponentModel.DataAnnotations; 

namespace MVCAngular8WebAPI.Models 
{
    public class Spam
    {
        [Key]
        public int Id { get; set; } 
        public string Email { get; set; }  
        public string Description { get; set; }
        [Required]
        public DateTime CreatedOn { get; set; } = DateTime.UtcNow;   
    }
}