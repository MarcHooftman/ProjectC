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
    public class AdminController : ControllerBase
    {
        private readonly AntesContext _context;

        public AdminController(AntesContext context)
        {
            _context = context;
        }

        // GET: api/Admin
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Admin>>> GetAdmin()
        {
            if (_context.Admin == null)
            {
                return NotFound();
            }
            return await _context.Admin.ToListAsync();
        }

        // GET: api/Admin/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Admin>> GetAdmin(int id)
        {
            if (_context.Admin == null)
            {
                return NotFound();
            }
            var Admin = await _context.Admin.FindAsync(id);

            if (Admin == null)
            {
                return NotFound();
            }

            return Admin;
        }


        // PUT: api/Admin/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAdmin(int id, Admin Admin)
        {
            if (id != Admin.ID)
            {
                return BadRequest();
            }

            _context.Entry(Admin).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AdminExists(id))
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

        // POST: api/Admin
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Admin>> PostAdmin(Admin Admin)
        {
            if (_context.Admin == null)
            {
                return Problem("Entity set 'AntesContext.Admin'  is null.");
            }
            _context.Admin.Add(Admin);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAdmin", new { id = Admin.ID }, Admin);
        }

        // DELETE: api/Admin/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAdmin(int id)
        {
            if (_context.Admin == null)
            {
                return NotFound();
            }
            var Admin = await _context.Admin.FindAsync(id);
            if (Admin == null)
            {
                return NotFound();
            }

            _context.Admin.Remove(Admin);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AdminExists(int id)
        {
            return (_context.Admin?.Any(e => e.ID == id)).GetValueOrDefault();
        }
    }
}
