// using System;
// using System.Collections.Generic;
// using System.Linq;
// using System.Threading.Tasks;
// using Microsoft.AspNetCore.Http;
// using Microsoft.AspNetCore.Mvc;
// using Microsoft.EntityFrameworkCore;
// using API.Models;

// namespace API.Controllers
// {
//     [Route("api/[controller]")]
//     [ApiController]
//     public class AttendingController : ControllerBase
//     {
//         private readonly AntesContext _context;

//         public AttendingController(AntesContext context)
//         {
//             _context = context;
//         }

//         // POST: api/Attending
//         [HttpPost]
//         public async Task<ActionResult<Attending>> PostAttending(Attending attending)
//         {
//             _context.Attending.Add(attending);
//             await _context.SaveChangesAsync();

//             var activity = await _context.Activity.FindAsync(attending.ActivityID);
//             if (activity != null)
//             {
//                 activity.Attending = activity.Attending ?? new List<Profile>();
//                 var profile = await _context.Profile.FindAsync(attending.ProfileID);
//                 if (profile != null)
//                 {
//                     activity.Attending.Add(profile);
//                     _context.Activity.Update(activity);
//                     await _context.SaveChangesAsync();
//                 }
//             }

//             return CreatedAtAction("GetAttending", new { id = attending.ActivityID }, attending);
//         }

//         // GET: api/Attending/5
//         [HttpGet("{id}")]
//         public async Task<ActionResult<Attending>> GetAttending(int id)
//         {
//             var attending = await _context.Attending.FindAsync(id);

//             if (attending == null)
//             {
//                 return NotFound();
//             }

//             return attending;
//         }

//     }
// }