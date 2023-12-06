using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API.Models;

namespace ProjectC.Controllers;

[Route("api/[controller]")]
[ApiController]
public class AuthController : ControllerBase
{
    private readonly AntesContext _context;

    public AuthController(AntesContext context)
    {
        _context = context;
    }

    [HttpPost]
    public async Task<IActionResult> Authenticate(Admin user)
    {
        var foundUser = await _context.Admin.Where(_ => _.Email == user.Email).FirstOrDefaultAsync();
        if (foundUser == null) return NotFound("User not found");
        if (user.Password != foundUser.Password) return BadRequest("Incorrect password");
        
        return Ok("Authentication successful");
    }
}
