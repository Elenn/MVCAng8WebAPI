using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Web.Http.Results;
using System.Net;
using MVCAngular8WebAPI.Models;
using MVCAngular8WebAPI.Controllers;

namespace MVCAngular8WebAPI.Test
{
    [TestClass]
    public class TestBookController
    {
        [TestMethod]//pass
        public void PostBook_ShouldReturnSameBook()
        {
            var controller = new BooksController(new TestWebAppContext());

            var item = GetDemoBook();

            var result =
                controller.PostBook(item) as CreatedAtRouteNegotiatedContentResult<Book>;

            Assert.IsNotNull(result);
            Assert.AreEqual(result.RouteName, "DefaultApi");
            Assert.AreEqual(result.RouteValues["id"], result.Content.Id);
            Assert.AreEqual(result.Content.Title, item.Title);
        } 

        [TestMethod]//pass
        public void PutBook_ShouldFail_WhenDifferentID() 
        {
            var controller = new BooksController(new TestWebAppContext());

            var badresult = controller.PutBook(999, GetDemoBook());
            Assert.IsInstanceOfType(badresult, typeof(BadRequestResult));
        } 

        [TestMethod]//pass
        public void GetBooks_ShouldReturnAllBooks() 
        {
            var context = new TestWebAppContext();
            context.Books.Add(new Book { Id = 1, Title = "Demo name", Description = "Demo name", PublishedOn = new DateTime(), Author = "Demo name" });
            context.Books.Add(new Book { Id = 2, Title = "Demo name", Description = "Demo name", PublishedOn = new DateTime(), Author = "Demo name" });
            context.Books.Add(new Book { Id = 3, Title = "Demo name", Description = "Demo name", PublishedOn = new DateTime(), Author = "Demo name" });

            var controller = new BooksController(context);
            var result = controller.GetBooks() as TestBookDbSet;

            Assert.IsNotNull(result);
            Assert.AreEqual(3, result.Local.Count);
        } 

        Book GetDemoBook()
        {
            return new Book() { Id = 3, Title = "Demo name", Description = "Demo name", PublishedOn= new DateTime(), Author= "Demo name" };
        }
    }
} 
 
