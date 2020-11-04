﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web; 
using System.ComponentModel.DataAnnotations; 

namespace MVCAngular8WebAPI.Models
{
    public class Book
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Title { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public DateTime PublishedOn { get; set; } = DateTime.UtcNow;
        [Required]
        public string Author { get; set; }
    }
}