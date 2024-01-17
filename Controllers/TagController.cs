using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API.Models;

namespace ProjectC.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TagController : ControllerBase
    {
        private readonly AntesContext _context;

        public TagController(AntesContext context)
        {
            _context = context;
        }

        // GET: api/Tag
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Tag>>> GetTag()
        {
            if (_context.Tag == null)
            {
                return NotFound();
            }
            return await _context.Tag.ToListAsync();
        }

        // GET: api/Tag/5
        [HttpGet("{name}")]
        public async Task<ActionResult<Tag>> GetTag(string name)
        {
            var tag = await _context.Tag.FindAsync(name);

            if (tag == null)
            {
                return NotFound();
            }

            return tag;
        }

        // // GET: api/Tag/tagName
        // [HttpGet("{tagName}")]
        // public async Task<ActionResult<Tag>> GetTag(string tagName)
        // {
        //     if (_context.Tag == null)
        //     {
        //         return NotFound();
        //     }
        //     var tag = await _context.Tag.FindAsync(tagName);

        //     if (tag == null)
        //     {
        //         return NotFound();
        //     }

        //     return tag;
        // }


        // POST: api/Tag
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Tag>> PostTag(Tag tag)
        {
            if (_context.Tag == null)
            {
                return Problem("Entity set 'AntesContext.Tag'  is null.");
            }

            // Check if a tag with the same name already exists
            if (_context.Tag.Any(t => t.Name == tag.Name))
            {
                return Conflict("A tag with the same name already exists.");
            }

            _context.Tag.Add(tag);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTag", new { name = tag.Name }, tag);
        }

        // DELETE: api/Tag/5
        [HttpDelete("{name}")]
        public async Task<IActionResult> DeleteTag(string name)
        {
            var tag = await _context.Tag.FindAsync(name);
            if (tag == null)
            {
                return NotFound();
            }

            _context.Tag.Remove(tag);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TagExists(string name)
        {
            return _context.Tag.Any(e => e.Name == name);
        }
    }
}
