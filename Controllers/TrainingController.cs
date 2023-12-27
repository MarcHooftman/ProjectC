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
    public class TrainingController : ControllerBase
    {
        private readonly AntesContext _context;

        public TrainingController(AntesContext context)
        {
            _context = context;
        }

        // GET: api/Training
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Training>>> GetTraining()
        {
            if (_context.Training == null)
            {
                return NotFound();
            }
            return await _context.Training
            .Include(_ => _.Tags)
            .ToListAsync();
        }

        // GET: api/Training/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Training>> GetTraining(int id)
        {
            if (_context.Training == null)
            {
                return NotFound();
            }
            var training = await _context.Training
            .Include(_ => _.Tags)
            .FirstOrDefaultAsync(_ => _.ID == id);

            if (training == null)
            {
                return NotFound();
            }

            return training;
        }

        // PUT: api/Training/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTraining(int id, Training training)
        {
            if (id != training.ID)
            {
                return BadRequest();
            }

            var newTags = new List<Tag>();

            foreach (var tag in training.Tags ?? new List<Tag>())
            {
                var existingTag = await _context.Tag.FindAsync(tag.Name);

                if (existingTag != null)
                {
                    newTags.Add(existingTag);
                }
                else
                {
                    _context.Tag.Add(tag);
                    newTags.Add(tag);
                }
            }
            _context.TrainingTag.RemoveRange(_context.TrainingTag.Where(_ => _.TrainingID == id));
            await _context.SaveChangesAsync();
            training.Tags = newTags;
            _context.Training.Update(training);

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TrainingExists(id))
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

        // POST: api/Training
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Training>> PostTraining(Training training)
        {
            if (_context.Training == null)
            {
                return Problem("Entity set 'AntesContext.Training'  is null.");
            }

            var newTags = new List<Tag>();

            foreach (var tag in training.Tags ?? new List<Tag>())
            {
                var existingTag = await _context.Tag.FindAsync(tag.Name);

                if (existingTag != null)
                {
                    newTags.Add(existingTag);
                }
                else
                {
                    _context.Tag.Add(tag);
                    newTags.Add(tag);
                }
            }
            
            training.Tags = newTags;

            _context.Training.Add(training);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTraining", new { id = training.ID }, training);
        }

        // DELETE: api/Training/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTraining(int id)
        {
            if (_context.Training == null)
            {
                return NotFound();
            }
            var training = await _context.Training.FindAsync(id);
            if (training == null)
            {
                return NotFound();
            }

            _context.Training.Remove(training);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TrainingExists(int id)
        {
            return (_context.Training?.Any(e => e.ID == id)).GetValueOrDefault();
        }
    }
}
