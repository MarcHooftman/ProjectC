using System.ComponentModel.DataAnnotations;

namespace API.Models;

public class Tag
{
    [Key]
    public string Name { get; set; } = null!;
    // public int? ForumPostID { get; set; } = null!;
    // public int? TrainingID { get; set; } = null!;
}