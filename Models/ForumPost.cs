namespace API.Models;

public class ForumPost
{
    public int ID { get; set; }
    public string Title { get; set; } = null!;
    public string Content { get; set; } = null!;
    public IEnumerable<Tag>? Tags { get; set; }
    public int ProfileID { get; set; }
    public Profile Profile { get; set; } = null!;
    public DateTime Time { get; set; }
    public int ParentPostID { get; set; }
    public ForumPost? ParentPost { get; set; }
    public IEnumerable<ForumPost>? Comments { get; set; }
    public IEnumerable<Like>? Likes { get; set; }
    public IEnumerable<Report>? Reports { get; set; }
}