using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http; 
using System.Web.Http; 
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Threading.Tasks;
using System.Web.Http.Description;
using MVCAngular8WebAPI.Models; 
 

namespace MVCAngular8WebAPI.Controllers
{
    public class SpamsController : ApiController
    {
        private WebAppContext db = new WebAppContext();

        // GET: api/Books
        public IQueryable<Spam> GetBooks()
        {
            return db.Spams;
        }

        // GET: api/Books/5
        [ResponseType(typeof(Spam))]
        public IHttpActionResult GetSpam(int id) 
        {
            Spam spam = db.Spams.Find(id);
            if (spam == null)
            {
                return NotFound();
            }

            return Ok(spam);
        }

        // PUT: api/Books/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutSpam(int id, Spam spam)  
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != spam.Id)
            {
                return BadRequest();
            }

            db.Entry(spam).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SpamExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Ok(spam);
        } 

        public async Task<IHttpActionResult> PostSpam(Spam spam)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Spams.Add(spam);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = spam.Id }, spam);
        }

        // DELETE: api/Books/5
        [ResponseType(typeof(Spam))]
        public IHttpActionResult DeleteSpam(int id)
        {
            Spam spam = db.Spams.Find(id);
            if (spam == null)
            {
                return NotFound();
            }

            db.Spams.Remove(spam);
            db.SaveChanges();

            return Ok(spam);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool SpamExists(int id)
        {
            return db.Spams.Count(e => e.Id == id) > 0;
        }
    }
}

