using System.ComponentModel.DataAnnotations.Schema;
namespace API.Models;

public class TrainingTag
{
    public int TrainingID { get; set; }
    public int TagID { get; set; }
    [ForeignKey("TrainingID")]
    public Training Training { get; set; } = null!;
    [ForeignKey("TagID")]
    public Tag Tag { get; set; } = null!;
}