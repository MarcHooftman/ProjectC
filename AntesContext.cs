using Microsoft.EntityFrameworkCore;
using API.Models;

public class AntesContext : DbContext
{
    public AntesContext(DbContextOptions<AntesContext> options)
        : base(options)
    {
    }
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseNpgsql(@"Host=localhost:5432;Username=postgres;Password=antes;Database=Antes;");
    }

    public DbSet<Activity> Activity { get; set; } = default!;
    public DbSet<ForumPost> ForumPost { get; set; } = default!;
    public DbSet<Media> Media { get; set; } = default!;
    public DbSet<Profile> Profile { get; set; } = default!;
    public DbSet<Training> Training { get; set; } = default!;
    public DbSet<User> User { get; set; } = default!;
}