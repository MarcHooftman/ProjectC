using Microsoft.EntityFrameworkCore;
using API.Models;

public class AntesContext : DbContext
{
    public AntesContext(DbContextOptions<AntesContext> options)
        : base(options)
    {
        this.ChangeTracker.AutoDetectChangesEnabled = false;
    }
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseNpgsql(@"Host=localhost:5432;Username=postgres;Password=antes;Database=Antes;Integrated Security=true;Pooling=true;");
    }


    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {

        modelBuilder.Entity<ForumPost>()
            .HasOne(_ => _.Profile)
            .WithMany()
            .HasForeignKey(_ => _.ProfileID);



        // modelBuilder.Entity<Training>()
        //     .HasOne(_ => _.Media)
        //     .WithMany()
        //     .HasForeignKey(_ => _.MediaID);

        modelBuilder.Entity<ForumPost>()
        .HasMany(_ => _.Comments)
        .WithOne()
        .HasForeignKey(_ => _.ForumPostID) // Use ForumPostID to set up the relationship
        .OnDelete(DeleteBehavior.Cascade); // Enable cascade delete

        modelBuilder.Entity<ForumPost>()
            .HasMany(_ => _.Tags)
            .WithMany()
            .UsingEntity<ForumTag>();

        modelBuilder.Entity<Training>()
            .HasMany(_ => _.Tags)
            .WithMany()
            .UsingEntity<TrainingTag>();

        modelBuilder.Entity<ForumPost>()
            .HasMany(_ => _.Likes);


        modelBuilder.Entity<ForumPost>()
            .HasMany(_ => _.Reports);


        modelBuilder.Entity<Profile>()
            .HasMany(_ => _.Training)
            .WithMany()
            .UsingEntity<TrainingProfile>();

        modelBuilder.Entity<Activity>()
            .HasMany(_ => _.Profiles)
            .WithMany()
            .UsingEntity<ProfileActivity>();


    }


    public DbSet<Activity> Activity { get; set; } = default!;
    public DbSet<ForumPost> ForumPost { get; set; } = default!;
    // public DbSet<Media> Media { get; set; } = default!;
    public DbSet<Profile> Profile { get; set; } = default!;
    public DbSet<Training> Training { get; set; } = default!;
    public DbSet<Like> Like { get; set; } = default!;
    public DbSet<Report> Report { get; set; } = default!;
    public DbSet<Tag> Tag { get; set; } = default!;
    public DbSet<Admin> Admin { get; set; } = default!;
    // public DbSet<Attending> Attending { get; set; } = default!;
    public DbSet<TempUser> TempUser { get; set; } = default!;
    // public DbSet<Attending> Attending { get; set; } = default!;
    public DbSet<API.Models.ProfileActivity> ProfileActivity { get; set; } = default!;
    public DbSet<API.Models.TrainingProfile> TrainingProfile { get; set; } = default!;
}

