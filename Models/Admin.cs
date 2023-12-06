namespace API.Models;

public class Admin
{
    public int ID { get; set; }
    public int Level { get; set; }
    public string Name { get; set; } = null!;
    public string Email { get; set; } = null!;
    public string Password { get; set; } = null!;
}
