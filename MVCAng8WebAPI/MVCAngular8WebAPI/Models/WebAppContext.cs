using System;
using System.Collections.Generic;
using System.Linq;
using System.Web; 
using System.Data.Entity; 

namespace MVCAngular8WebAPI.Models 
{
    public class WebAppContext : DbContext, IStoreAppContext
    {
        // You can add custom code to this file. Changes will not be overwritten.
        // 
        // If you want Entity Framework to drop and regenerate your database
        // automatically whenever you change your model schema, please use data migrations.
        // For more information refer to the documentation:
        // http://msdn.microsoft.com/en-us/data/jj591621.aspx

        public WebAppContext() : base("name=WebAppContext")
        {
            //Database.SetInitializer(new DropCreateDatabaseIfModelChanges<WebAppContext>());
            Database.SetInitializer(new DropCreateDatabaseAlways<WebAppContext>());
        }

        public DbSet<Book> Books { get; set; }
        public DbSet<Spam> Spams { get; set; } 

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }

        public void MarkAsModified(Book item)
        {
            Entry(item).State = EntityState.Modified;
        }
    }
}