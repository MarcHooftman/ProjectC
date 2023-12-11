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
public class TempUserController : ControllerBase
{
    private readonly AntesContext _context;

    public TempUserController(AntesContext context)
    {
        _context = context;
    }

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

        Console.WriteLine(user.ExpirationDate);

        user.VerificationCode = new Random().Next(100000, 999999).ToString();
        _context.TempUser.Add(user);
        await _context.SaveChangesAsync();
        return Ok(user);
    }
}
