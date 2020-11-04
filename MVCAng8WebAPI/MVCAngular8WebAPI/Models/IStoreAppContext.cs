using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace MVCAngular8WebAPI.Models
{
    public interface IStoreAppContext : IDisposable
    {
        DbSet<Book> Books { get; } 
        int SaveChanges();
        void MarkAsModified(Book item);
    }
}