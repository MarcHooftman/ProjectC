using System.ComponentModel.DataAnnotations.Schema;
namespace API.Models;

public class PostTag
{
    public int PostID { get; set; }
    public int TagID { get; set; }
    [ForeignKey("PostID")]
    public ForumPost Post { get; set; } = null!;
    [ForeignKey("TagID")]
    public Tag Tag { get; set; } = null!;
}