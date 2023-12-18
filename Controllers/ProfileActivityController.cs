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
    public class ProfileActivityController : ControllerBase
    {
        private readonly AntesContext _context;

        public ProfileActivityController(AntesContext context)
        {
            _context = context;
        }

        // GET: api/ProfileActivity
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ProfileActivity>>> GetProfileActivity()
        {
            if (_context.ProfileActivity == null)
            {
                return NotFound();
            }
            return await _context.ProfileActivity.ToListAsync();
        }

        // GET: api/ProfileActivity/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ProfileActivity>> GetProfileActivity(int id)
        {
            if (_context.ProfileActivity == null)
            {
                return NotFound();
            }
            var profileActivity = await _context.ProfileActivity.FindAsync(id);

            if (profileActivity == null)
            {
                return NotFound();
            }

            return profileActivity;
        }

        // PUT: api/ProfileActivity/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProfileActivity(int id, ProfileActivity profileActivity)
        {
            if (id != profileActivity.ActivityID)
            {
                return BadRequest();
            }

            _context.Entry(profileActivity).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProfileActivityExists(id))
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

        // POST: api/ProfileActivity
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ProfileActivity>> PostProfileActivity(ProfileActivity profileActivity)
        {
            if (_context.ProfileActivity == null)
            {
                return Problem("Entity set 'AntesContext.ProfileActivity'  is null.");
            }
            _context.ProfileActivity.Add(profileActivity);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (ProfileActivityExists(profileActivity.ActivityID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetProfileActivity", new { id = profileActivity.ActivityID }, profileActivity);
        }

        // // DELETE: api/ProfileActivity/5
        // [HttpDelete("{id}")]
        // public async Task<IActionResult> DeleteProfileActivity(int id)
        // {
        //     if (_context.ProfileActivity == null)
        //     {
        //         return NotFound();
        //     }
        //     var profileActivity = await _context.ProfileActivity.FindAsync(id);
        //     if (profileActivity == null)
        //     {
        //         return NotFound();
        //     }

        //     _context.ProfileActivity.Remove(profileActivity);
        //     await _context.SaveChangesAsync();

        //     return NoContent();
        // }

        // DELETE: api/ProfileActivity/5/5
        [HttpDelete("{ProfileID}/{ActivityID}")]
        public async Task<IActionResult> DeleteProfileActivity(int ProfileID, int ActivityID)
        {
            if (_context.ProfileActivity == null)
            {
                // Console.WriteLine("ProfileActivity1 not found");
                // Console.WriteLine("ActivityID: " + ActivityID);
                // Console.WriteLine("ProfileID: " + ProfileID);
                return NotFound();
            }
            var profileActivity = await _context.ProfileActivity.FindAsync(ActivityID, ProfileID);
            if (profileActivity == null)
            {
                // Console.WriteLine("ProfileActivity2 not found");
                // Console.WriteLine("ActivityID: " + ActivityID);
                // Console.WriteLine("ProfileID: " + ProfileID);
                return NotFound();
            }

            _context.ProfileActivity.Remove(profileActivity);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ProfileActivityExists(int id)
        {
            return (_context.ProfileActivity?.Any(e => e.ActivityID == id)).GetValueOrDefault();
        }
    }
}
