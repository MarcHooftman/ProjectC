namespace API.Models;

public class Tag
{
    public int ID { get; set; }
    public string Name { get; set; } = null!;
    public int? ForumPostID { get; set; } = null!;
    public int? TrainingID { get; set; } = null!;
}