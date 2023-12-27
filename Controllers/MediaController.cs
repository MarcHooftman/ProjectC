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
//     public class MediaController : ControllerBase
//     {
//         private readonly AntesContext _context;

//         public MediaController(AntesContext context)
//         {
//             _context = context;
//         }

//         // GET: api/Media
//         [HttpGet]
//         public async Task<ActionResult<IEnumerable<Media>>> GetMedia()
//         {
//             if (_context.Media == null)
//             {
//                 return NotFound();
//             }
//             return await _context.Media.ToListAsync();
//         }

//         // GET: api/Media/5
//         [HttpGet("{id}")]
//         public async Task<ActionResult<Media>> GetMedia(int id)
//         {
//             if (_context.Media == null)
//             {
//                 return NotFound();
//             }
//             var media = await _context.Media.FindAsync(id);

//             if (media == null)
//             {
//                 return NotFound();
//             }

//             return media;
//         }

//         // PUT: api/Media/5
//         // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
//         [HttpPut("{id}")]
//         public async Task<IActionResult> PutMedia(int id, Media media)
//         {
//             if (id != media.ID)
//             {
//                 return BadRequest();
//             }

//             _context.Entry(media).State = EntityState.Modified;

//             try
//             {
//                 await _context.SaveChangesAsync();
//             }
//             catch (DbUpdateConcurrencyException)
//             {
//                 if (!MediaExists(id))
//                 {
//                     return NotFound();
//                 }
//                 else
//                 {
//                     throw;
//                 }
//             }

//             return NoContent();
//         }

//         // POST: api/Media
//         // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
//         [HttpPost]
//         public async Task<ActionResult<Media>> PostMedia(Media media)
//         {
//             if (_context.Media == null)
//             {
//                 return Problem("Entity set 'AntesContext.Media'  is null.");
//             }
//             _context.Media.Add(media);
//             await _context.SaveChangesAsync();

//             return CreatedAtAction("GetMedia", new { id = media.ID }, media);
//         }

//         // DELETE: api/Media/5
//         [HttpDelete("{id}")]
//         public async Task<IActionResult> DeleteMedia(int id)
//         {
//             if (_context.Media == null)
//             {
//                 return NotFound();
//             }
//             var media = await _context.Media.FindAsync(id);
//             if (media == null)
//             {
//                 return NotFound();
//             }

//             _context.Media.Remove(media);
//             await _context.SaveChangesAsync();

//             return NoContent();
//         }

//         private bool MediaExists(int id)
//         {
//             return (_context.Media?.Any(e => e.ID == id)).GetValueOrDefault();
//         }
//     }
// }
