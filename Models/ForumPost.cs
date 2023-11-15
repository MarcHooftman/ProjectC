namespace API.Models;

public class ForumPost
{
    public int ID { get; set; }
    public string Title { get; set; } = null!;
    public string Content { get; set; } = null!;
    public string[] Tags { get; set; } = null!;
    public Profile Profile { get; set; } = null!;
    public DateTime Time { get; set; }
    public ForumPost[] Comments { get; set; } = null!;
    public Profile[] Likes { get; set; } = null!;
    public Profile[] Reports { get; set; } = null!;
}