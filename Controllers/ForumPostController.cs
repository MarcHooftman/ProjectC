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

            var forumposts = await _context.ForumPost
                .Include(_ => _.Profile)
                .Include(_ => _.Tags)
                .Include(_ => _.Likes)
                .Include(_ => _.Reports)
                .ToListAsync();

            return await forumposts.IncludeComments(_context);
        }

        // GET: api/ForumPost/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ForumPost>> GetForumPost(int id)
        {
            if (_context.ForumPost == null)
            {
                return NotFound();
            }
            var forumPost = await _context.ForumPost
                .Include(_ => _.Profile)
                .Include(_ => _.Tags)
                .Include(_ => _.Likes)
                .Include(_ => _.Reports)
                .FirstOrDefaultAsync(_ => _.ID == id);

            if (forumPost == null)
            {
                return NotFound();
            }

            return await forumPost.IncludeComments(_context);
        }

        // GET: api/ForumPost/by-profile/5
        [HttpGet("by-profile/{profileID}")]
        public async Task<ActionResult<IEnumerable<ForumPost>>> GetForumPostByProfileID(int profileID)
        {
            if (_context.ForumPost == null)
            {
                return NotFound();
            }
            var forumPost = await _context.ForumPost
                .Include(_ => _.Profile)
                .Include(_ => _.Tags)
                .Include(_ => _.Likes)
                .Include(_ => _.Reports)
                .Where(_ => _.ProfileID == profileID).ToListAsync();

            if (forumPost == null)
            {
                return NotFound();
            }

            return await forumPost.IncludeComments(_context);
        }

        // GET: api/ForumPost/popular
        [HttpGet("popular")]
        public async Task<ActionResult<ForumPost>> GetPopularForumPost()
        {
            if (_context.ForumPost == null)
            {
                return NotFound();
            }

            var forumPost = await _context.ForumPost
                .Include(_ => _.Profile)
                .Include(_ => _.Tags)
                .OrderByDescending(fp => fp.Likes.Count())
                .FirstOrDefaultAsync();

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

            // if (forumPost.Profile == null)
            // {
            //     return Problem("Post has no profile attached");
            // }

            // // prevent Entity Framework from adding the profile to the Profile table
            // // by setting it as null
            // forumPost.ProfileID = forumPost.Profile.ID;
            // forumPost.Profile = null;

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
