using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;
using MVCAngular8WebAPI.Models; 

namespace MVCAngular8WebAPI.Test
{
    public class TestWebAppContext : IStoreAppContext 
    {
        public TestWebAppContext() 
        {
            this.Books = new TestBookDbSet();
        }

        public DbSet<Book> Books { get; set; } 

        public int SaveChanges()
        {
            return 0;
        }

        public void MarkAsModified(Book item) { }
        public void Dispose() { }
    }
}
