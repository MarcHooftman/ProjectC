using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API.Models;
using Newtonsoft.Json.Converters;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TempUserController : ControllerBase
    {
        private readonly AntesContext _context;

        public TempUserController(AntesContext context)
        {
            _context = context;
        }

        // GET: api/TempUser
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TempUser>>> GetTempUser()
        {
            if (_context.TempUser == null)
            {
                return NotFound();
            }
            return await _context.TempUser.ToListAsync();
        }

        // GET: api/TempUser/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TempUser>> GetTempUser(int id)
        {
            if (_context.TempUser == null)
            {
                return NotFound();
            }
            var TempUser = await _context.TempUser.FirstOrDefaultAsync(_ => _.ID == id);

            if (TempUser == null)
            {
                return NotFound();
            }

            return TempUser;
        }

        // GET: api/TempUser/by-user/6
        [HttpGet("by-email/{email}")]
        public async Task<ActionResult<TempUser>> GetTempUserByEmail(string email)
        {
            if (_context.TempUser == null)
            {
                return NotFound();
            }
            var TempUser = await _context.TempUser.FirstOrDefaultAsync(_ => _.Email == email);

            if (TempUser == null)
            {
                return NotFound();
            }

            return TempUser;
        }

        // PUT: api/TempUser/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTempUser(int id, TempUser TempUser)
        {
            if (id != TempUser.ID)
            {
                return BadRequest();
            }

            _context.Entry(TempUser).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TempUserExists(id))
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

        // POST: api/TempUser
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<IActionResult> PostTempUser(TempUser user)
        {
            if (user == null)
            {
                return BadRequest();
            }

            bool isEmailPresent =
                await _context.Admin.AnyAsync(a => a.Email == user.Email)
                || await _context.Profile.AnyAsync(p => p.Email == user.Email);
            if (isEmailPresent)
            {
                return BadRequest("Email already exists");
            }

            user.VerificationCode = new Random().Next(100000, 999999).ToString();
            _context.TempUser.Add(user);
            await _context.SaveChangesAsync();


            string expDate = "onbekend";
            if (user.ExpirationDate != null) expDate = user.ExpirationDate.Value.ToShortDateString();

            MailSender.SendMail(
                user.Email,
                "Jouw Antes inlogcode",
                $"Inlogcode: {user.VerificationCode}\nVerloopt op: {expDate}");

            return Ok(user);
        }

        // DELETE: api/TempUser/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTempUser(int id)
        {
            if (_context.TempUser == null)
            {
                return NotFound();
            }
            var TempUser = await _context.TempUser.FindAsync(id);
            if (TempUser == null)
            {
                return NotFound();
            }

            _context.TempUser.Remove(TempUser);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TempUserExists(int id)
        {
            return (_context.TempUser?.Any(e => e.ID == id)).GetValueOrDefault();
        }
    }
}

