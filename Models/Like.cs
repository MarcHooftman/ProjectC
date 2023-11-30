using System.ComponentModel.DataAnnotations.Schema;

namespace API.Models;

public class Like
{
    public int ID { get; set; }
    public int ForumPostID { get; set; }
    public int ProfileID { get; set; }
}