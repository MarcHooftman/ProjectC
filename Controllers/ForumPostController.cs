using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API.Models;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ForumPostController : ControllerBase
    {
        private readonly AntesContext _context;

        public ForumPostController(AntesContext context)
        {
            _context = context;
        }

        // GET: api/ForumPost
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ForumPost>>> GetForumPost()
        {
            if (_context.ForumPost == null)
            {
                return NotFound();
            }
            return await _context.ForumPost.Include(_ => _.Profile).ToListAsync();
        }

        // GET: api/ForumPost/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ForumPost>> GetForumPost(int id)
        {
            if (_context.ForumPost == null)
            {
                return NotFound();
            }
            var forumPost = await _context.ForumPost.FindAsync(id);

            if (forumPost == null)
            {
                return NotFound();
            }

            return forumPost;
        }

        // PUT: api/ForumPost/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutForumPost(int id, ForumPost forumPost)
        {
            if (id != forumPost.ID)
            {
                return BadRequest();
            }

            _context.Entry(forumPost).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ForumPostExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/ForumPost
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ForumPost>> PostForumPost(ForumPost forumPost)
        {
            if (_context.ForumPost == null)
            {
                return Problem("Entity set 'AntesContext.ForumPost'  is null.");
            }
            _context.ForumPost.Add(forumPost);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetForumPost", new { id = forumPost.ID }, forumPost);
        }

        // DELETE: api/ForumPost/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteForumPost(int id)
        {
            if (_context.ForumPost == null)
            {
                return NotFound();
            }
            var forumPost = await _context.ForumPost.FindAsync(id);
            if (forumPost == null)
            {
                return NotFound();
            }

            _context.ForumPost.Remove(forumPost);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ForumPostExists(int id)
        {
            return (_context.ForumPost?.Any(e => e.ID == id)).GetValueOrDefault();
        }
    }
}
