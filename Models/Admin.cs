namespace API.Models;

public class Admin
{
    public int ID { get; set; }
    public int? Level { get; set; } = 1;
    public string Email { get; set; } = null!;
    public string Password { get; set; } = null!;
}
