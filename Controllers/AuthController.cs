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

    [HttpPost("admin")]
    public async Task<IActionResult> Authenticate(Admin user)
    {
        var foundUser = await _context.Admin.Where(_ => _.Email == user.Email).FirstOrDefaultAsync();
        if (foundUser == null || user.Password != foundUser.Password) return BadRequest("Invalid credentials");

        return Ok("Authentication successful");
    }

    [HttpPost("temp")]
    public async Task<IActionResult> Authenticate(TempUser user)
    {
        var foundUser = await _context.TempUser.Where(_ => _.Email == user.Email).FirstOrDefaultAsync();
        if (foundUser == null 
            || user.VerificationCode != foundUser.VerificationCode
            || foundUser.ExpirationDate < DateOnly.FromDateTime(DateTime.Now)
        ) 
        {
            return BadRequest("Invalid credentials");
        }

        return Ok("Authentication successful");
    }
}
