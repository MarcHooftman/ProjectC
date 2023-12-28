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
    public class ActivityController : ControllerBase
    {
        private readonly AntesContext _context;

        public ActivityController(AntesContext context)
        {
            _context = context;
        }

        // GET: api/Activity
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Activity>>> GetActivity()
        {
            if (_context.Activity == null)
            {
                return NotFound();
            }
            return await _context.Activity.ToListAsync();
        }

        // GET: api/Activity/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Activity>> GetActivity(int id)
        {
            if (_context.Activity == null)
            {
                return NotFound();
            }
            var activity = await _context.Activity.FirstOrDefaultAsync(_ => _.ID == id);

            if (activity == null)
            {
                return NotFound();
            }

            return activity;
        }

        // GET: api/Activity/5
        [HttpGet("first")]
        public async Task<ActionResult<Activity>> GetFirstActivity()
        {
            if (_context.Activity == null)
            {
                return NotFound();
            }
            var activity = await _context.Activity.OrderBy(_ => _.Time).FirstOrDefaultAsync();

            if (activity == null)
            {
                return NotFound();
            }

            return activity;
        }

        // PUT: api/Activity/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutActivity(int id, Activity activity)
        {
            if (id != activity.ID)
            {
                return BadRequest();
            }

            _context.Entry(activity).State = EntityState.Modified;

            try
            {
                foreach (Profile p in _context.Profile.Where(p => p.Activity.Contains(activity)))
                {
                    MailSender.SendMail(p.Email, "Antes - Activiteit gewijzigd", $"<html>Een activiteit waar je aan deelneemt is gewijzigd.<br>Ga naar de <a href=\"https://localhost:44463\">website</a> om de veranderingen te bekijken.<br>{activity.Title}.</html>");
                }
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ActivityExists(id))
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

        // POST: api/Activity
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Activity>> PostActivity(Activity activity)
        {
            if (_context.Activity == null)
            {
                return Problem("Entity set 'AntesContext.Activity'  is null.");
            }
            _context.Activity.Add(activity);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetActivity", new { id = activity.ID }, activity);
        }

        // DELETE: api/Activity/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteActivity(int id)
        {
            if (_context.Activity == null)
            {
                return NotFound();
            }
            var activity = await _context.Activity.FindAsync(id);
            if (activity == null)
            {
                return NotFound();
            }

            _context.Activity.Remove(activity);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ActivityExists(int id)
        {
            return (_context.Activity?.Any(e => e.ID == id)).GetValueOrDefault();
        }

        // [HttpPost("{activityId}/attendees/{profileId}")]
        // public async Task<IActionResult> AddAttendee(int activityId, int profileId)
        // {
        //     var activity = await _context.Activities.FindAsync(activityId);
        //     var profile = await _context.Profiles.FindAsync(profileId);

        //     if (activity == null || profile == null)
        //     {
        //         return NotFound();
        //     }

        //     var attending = new Attending
        //     {
        //         Activity = activity,
        //         Profile = profile
        //     };

        //     _context.Attendings.Add(attending);
        //     await _context.SaveChangesAsync();

        //     return Ok(attending);
        // }
    }
}
