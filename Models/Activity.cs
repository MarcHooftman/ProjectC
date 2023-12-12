namespace API.Models;

public class Activity
{
    public int ID { get; set; }
    public string Title { get; set; } = null!;
    public string Description { get; set; } = null!;
    public string Location { get; set; } = null!;
    public DateTime Time { get; set; }
    public ICollection<Profile> Attending { get; set; }
}