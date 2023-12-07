namespace API.Models;

public class Profile
{
    public int ID { get; set; }
    public string Email { get; set; } = null!;
    public string? FullName { get; set; }
    public string? Bio { get; set; }
    public DateOnly? MemberSince { get; set; }
    public DateTime? LastLogin { get; set; }
    public string? Role { get; set; }
    public DateOnly? DateOfBirth { get; set; }
    public string? Department { get; set; }
    public int? ProfilePictureID { get; set; }
    public Media? ProfilePicture { get; set; }
    public string? PhoneNumber { get; set; }
    public string? UserPrincipalName { get; set; }

    // navigational
    // public IEnumerable<Training>? Training { get; set; }
}