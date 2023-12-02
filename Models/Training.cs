namespace API.Models;

public class Training
{
    public int ID { get; set; }
    public string Title { get; set; } = null!;
    public string Description { get; set; } = null!;

    public int MediaID { get; set; }
    public Media? Media { get; set; }
    public IEnumerable<Tag>? Tags { get; set; }

    public IEnumerable<Profile>? Profile { get; set; }
}