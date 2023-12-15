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
    public class TrainingProfileController : ControllerBase
    {
        private readonly AntesContext _context;

        public TrainingProfileController(AntesContext context)
        {
            _context = context;
        }

        // GET: api/TrainingProfile
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TrainingProfile>>> GetTrainingProfile()
        {
          if (_context.TrainingProfile == null)
          {
              return NotFound();
          }
            return await _context.TrainingProfile.ToListAsync();
        }

        // GET: api/TrainingProfile/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TrainingProfile>> GetTrainingProfile(int id)
        {
          if (_context.TrainingProfile == null)
          {
              return NotFound();
          }
            var trainingProfile = await _context.TrainingProfile.FindAsync(id);

            if (trainingProfile == null)
            {
                return NotFound();
            }

            return trainingProfile;
        }

        // PUT: api/TrainingProfile/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTrainingProfile(int id, TrainingProfile trainingProfile)
        {
            if (id != trainingProfile.ProfileID)
            {
                return BadRequest();
            }

            _context.Entry(trainingProfile).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TrainingProfileExists(id))
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

        // POST: api/TrainingProfile
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TrainingProfile>> PostTrainingProfile(TrainingProfile trainingProfile)
        {
          if (_context.TrainingProfile == null)
          {
              return Problem("Entity set 'AntesContext.TrainingProfile'  is null.");
          }
            _context.TrainingProfile.Add(trainingProfile);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (TrainingProfileExists(trainingProfile.ProfileID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetTrainingProfile", new { id = trainingProfile.ProfileID }, trainingProfile);
        }

        // DELETE: api/TrainingProfile/5
        [HttpDelete("{ProfileID}/{TrainingID}")]
        public async Task<IActionResult> DeleteTrainingProfile(int ProfileID, int TrainingID)
        {
            if (_context.TrainingProfile == null)
            {
                return NotFound();
            }
            var trainingProfile = await _context.TrainingProfile.FindAsync(ProfileID, TrainingID);
            if (trainingProfile == null)
            {
                return NotFound();
            }

            _context.TrainingProfile.Remove(trainingProfile);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TrainingProfileExists(int id)
        {
            return (_context.TrainingProfile?.Any(e => e.ProfileID == id)).GetValueOrDefault();
        }
    }
}
