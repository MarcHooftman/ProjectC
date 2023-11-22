using System.ComponentModel.DataAnnotations.Schema;
namespace API.Models;

public class TrainingProfile
{
    public int TrainingID { get; set; }
    public int ProfileID { get; set; }
    [ForeignKey("TrainingID")]
    public Training Training { get; set; } = null!;
    [ForeignKey("ProfileID")]
    public Profile Profile { get; set; } = null!;
}