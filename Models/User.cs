namespace API.Models;

public class User
{
    public int ID { get; set; }
    public string Email { get; set; } = null!;
    public string Password { get; set; } = null!;
}