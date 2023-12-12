namespace API.Models;

public class TempUser
{
    public int ID { get; set; }
    public string Email { get; set; } = null!;
    public string VerificationCode { get; set; } = null!;
    public DateOnly? ExpirationDate { get; set; }
}