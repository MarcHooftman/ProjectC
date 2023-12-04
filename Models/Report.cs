using System.ComponentModel.DataAnnotations.Schema;
namespace API.Models;

public class Report
{
    public int ID { get; set; }
    public int ForumPostID { get; set; }
    public int ProfileID { get; set; }
    public bool Spam { get; set; } = false;
    public bool Inappropriate { get; set; } = false;
    public bool NotWorkRelated { get; set; } = false;
    public bool Other { get; set; } = false;
    public string? Elaboration { get; set; } = null;
}