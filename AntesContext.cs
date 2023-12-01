using Microsoft.EntityFrameworkCore;
using API.Models;
using onboarding.Pages;


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



        modelBuilder.Entity<Profile>()
            .HasOne(_ => _.User)
            .WithMany()
            .HasForeignKey(_ => _.UserID);


        modelBuilder.Entity<Training>()
            .HasOne(_ => _.Media)
            .WithMany()
            .HasForeignKey(_ => _.MediaID);


        modelBuilder.Entity<ForumPost>()
            .HasMany(_ => _.Comments);


        modelBuilder.Entity<ForumPost>()
            .HasMany(_ => _.Tags);


        modelBuilder.Entity<Training>()
            .HasMany(_ => _.Tags);


        modelBuilder.Entity<ForumPost>()
            .HasMany(_ => _.Likes);


        modelBuilder.Entity<ForumPost>()
            .HasMany(_ => _.Reports)
            .WithOne(_ => _.Post)
            .HasForeignKey(_ => _.PostID);


        modelBuilder.Entity<Profile>()
            .HasMany(_ => _.Training)
            .WithMany(_ => _.Profile)
            .UsingEntity<TrainingProfile>();
    }


    public DbSet<Activity> Activity { get; set; } = default!;
    public DbSet<ForumPost> ForumPost { get; set; } = default!;
    public DbSet<Media> Media { get; set; } = default!;
    public DbSet<Profile> Profile { get; set; } = default!;
    public DbSet<Training> Training { get; set; } = default!;
    public DbSet<User> User { get; set; } = default!;
    public DbSet<Like> Like { get; set; } = default!;
    public DbSet<Report> Report { get; set; } = default!;
    public DbSet<Tag> Tag { get; set; } = default!;

}

