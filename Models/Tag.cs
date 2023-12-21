using System.ComponentModel.DataAnnotations;

namespace API.Models;

public class Tag
{
    [Key]
    public string Name { get; set; } = null!;
}