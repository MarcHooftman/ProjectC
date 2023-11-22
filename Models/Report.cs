using System.ComponentModel.DataAnnotations.Schema;
namespace API.Models;

public class Report
{
    public int ID { get; set; }
    public int PostID { get; set; }
    public int ProfileID { get; set; }
    [ForeignKey("PostID")]
    public ForumPost Post { get; set; } = null!;
    [ForeignKey("ProfileID")]
    public Profile Profile { get; set; } = null!;
}