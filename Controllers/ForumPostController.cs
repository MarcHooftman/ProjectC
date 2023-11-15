using Microsoft.AspNetCore.Mvc;
using Models;

namespace onboarding.Controllers;

[ApiController]
[Route("[controller]")]
public class ForumPostController : ControllerBase
{
    private readonly ILogger<ForumPostController> _logger;

    public ForumPostController(ILogger<ForumPostController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    public IEnumerable<ForumPost> Get()
    {
        return new ForumPost[] { };
    }
}
