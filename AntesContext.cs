/*
namespace API.Models;

public class Activity
{
    public int ID { get; set; }
    public string Title { get; set; } = null!;
    public string Description { get; set; } = null!;
    public string Location { get; set; } = null!;
    public DateTime Time { get; set; }
}

namespace API.Models;

public class ForumPost
{
    public int ID { get; set; }
    public string Title { get; set; } = null!;
    public string Content { get; set; } = null!;
    public string[] Tags { get; set; } = null!;
    public Profile Profile { get; set; } = null!;
    public DateTime Time { get; set; }
    public ForumPost[] Comments { get; set; } = null!;
    public Profile[] Likes { get; set; } = null!;
    public Profile[] Reports { get; set; } = null!;
}

namespace API.Models;

public class Media
{
    public int ID { get; set; }
    public string Type { get; set; } = null!;
    public string URL { get; set; } = null!;
}

namespace API.Models;

public class Profile
{
    public int ID { get; set; }
    public User User { get; set; } = null!;
    public string? FullName { get; set; }
    public string? Bio { get; set; }
    public DateOnly? MemberSince { get; set; }
    public DateTime? LastLogin { get; set; }
    public string? Role { get; set; }
    public DateOnly? DateOfBirth { get; set; }
    public string? Department { get; set; }
    public Media? ProfilePicture { get; set; }
    public string? PhoneNumber { get; set; }
    public Training[]? TrainingsWatched { get; set; }
}

namespace API.Models;

public class Training
{
    public int ID { get; set; }
    public string Title { get; set; } = null!;
    public string Description { get; set; } = null!;
    public Media? Media { get; set; }
    public string[] Tags { get; set; } = null!;
}

namespace API.Models;

public class User
{
    public int ID { get; set; }
    public string Email { get; set; } = null!;
    public string Password { get; set; } = null!;
}
*/

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

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<ForumPost>()
            .HasOne(_ => _.Profile)
            .WithMany()
            .HasForeignKey(_ => _.ProfileID)
            .IsRequired(true)
            .HasConstraintName("FKprofile");

        modelBuilder.Entity<Profile>()
            .HasOne(_ => _.User)
            .WithMany()
            .HasForeignKey(_ => _.UserID)
            .IsRequired(true)
            .HasConstraintName("FKuser");

        modelBuilder.Entity<Profile>()
            .HasOne(_ => _.ProfilePicture)
            .WithMany()
            .HasForeignKey(_ => _.ProfilePictureID)
            .IsRequired(true)
            .HasConstraintName("FKmedia");

        modelBuilder.Entity<Training>()
            .HasOne(_ => _.Media)
            .WithMany()
            .HasForeignKey(_ => _.MediaID)
            .IsRequired(true)
            .HasConstraintName("FKmedia");
    }

    public DbSet<Activity> Activity { get; set; } = default!;
    public DbSet<ForumPost> ForumPost { get; set; } = default!;
    public DbSet<Media> Media { get; set; } = default!;
    public DbSet<Profile> Profile { get; set; } = default!;
    public DbSet<Training> Training { get; set; } = default!;
    public DbSet<User> User { get; set; } = default!;
}