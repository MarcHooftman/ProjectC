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
    public class ProfileController : ControllerBase
    {
        private readonly AntesContext _context;

        public ProfileController(AntesContext context)
        {
            _context = context;
        }

        // GET: api/Profile
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Profile>>> GetProfile()
        {
            if (_context.Profile == null)
            {
                return NotFound();
            }
            return await _context.Profile
            .Include(_ => _.Training)
            .Include(_ => _.Activity)
            .ToListAsync();
        }

        // GET: api/Profile/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Profile>> GetProfile(int id)
        {
            if (_context.Profile == null)
            {
                return NotFound();
            }
            var profile = await _context.Profile
            .Include(_ => _.Training)
            .Include(_ => _.Activity)
            .FirstOrDefaultAsync(_ => _.ID == id);

            if (profile == null)
            {
                return NotFound();
            }

            return profile;
        }

        // GET: api/Profile/by-user/6
        [HttpGet("by-email/{email}")]
        public async Task<ActionResult<Profile>> GetProfileByEmail(string email)
        {
            if (_context.Profile == null)
            {
                return NotFound();
            }
            var profile = await _context.Profile
            .Include(_ => _.Training)
            .Include(_ => _.Activity)
            .FirstOrDefaultAsync(_ => _.Email == email);

            if (profile == null)
            {
                return NotFound();
            }

            return profile;
        }

        // GET: api/Profile/by-user/6
        [HttpGet("email-exists/{email}")]
        public async Task<ActionResult<Profile>> EmailExists(string email)
        {
            bool exists = await _context.Profile.AnyAsync(_ => _.Email == email);
            return Ok(exists);
        }

        // PUT: api/Profile/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProfile(int id, Profile profile)
        {
            if (id != profile.ID)
            {
                return BadRequest();
            }
            _context.Entry(profile).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProfileExists(id))
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

        // POST: api/Profile
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Profile>> PostProfile(Profile profile)
        {
            if (_context.Profile == null)
            {
                return Problem("Entity set 'AntesContext.Profile'  is null.");
            }
            // profile.User = null;
            _context.Profile.Add(profile);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProfile", new { id = profile.ID }, profile);
        }

        // DELETE: api/Profile/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProfile(int id)
        {
            if (_context.Profile == null)
            {
                return NotFound();
            }
            var profile = await _context.Profile.FindAsync(id);
            if (profile == null)
            {
                return NotFound();
            }

            _context.Profile.Remove(profile);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ProfileExists(int id)
        {
            return (_context.Profile?.Any(e => e.ID == id)).GetValueOrDefault();
        }
    }
}
