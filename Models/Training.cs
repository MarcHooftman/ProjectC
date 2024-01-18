namespace API.Models;

public class Training
{
    public int ID { get; set; }
    public string Title { get; set; } = null!;
    public string Description { get; set; } = null!;

    public string? Url { get; set; }
    public IEnumerable<Tag>? Tags { get; set; }

}