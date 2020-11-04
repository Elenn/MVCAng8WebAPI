using System.Linq;
using MVCAngular8WebAPI.Models;

namespace MVCAngular8WebAPI.Test
{
    class TestBookDbSet : TestDbSet<Book> 
    {
        public override Book Find(params object[] keyValues)
        {
            return this.SingleOrDefault(book => book.Id == (int)keyValues.Single());
        }
    }
}
