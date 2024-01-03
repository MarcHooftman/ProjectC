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

        /*
POSTGRES_URL="postgres://default:Cj0uAMd7xKaB@ep-curly-night-85683084-pooler.eu-central-1.postgres.vercel-storage.com:5432/verceldb"
POSTGRES_PRISMA_URL="postgres://default:Cj0uAMd7xKaB@ep-curly-night-85683084-pooler.eu-central-1.postgres.vercel-storage.com:5432/verceldb?pgbouncer=true&connect_timeout=15"
POSTGRES_URL_NON_POOLING="postgres://default:Cj0uAMd7xKaB@ep-curly-night-85683084.eu-central-1.postgres.vercel-storage.com:5432/verceldb"
POSTGRES_USER="default"
POSTGRES_HOST="ep-curly-night-85683084-pooler.eu-central-1.postgres.vercel-storage.com"
POSTGRES_PASSWORD="Cj0uAMd7xKaB"
POSTGRES_DATABASE="verceldb"
        */
        //optionsBuilder.UseNpgsql(@"Host=localhost:5432;Username=postgres;Password=antes;Database=Antes;Integrated Security=true;Pooling=true;");
        optionsBuilder.UseNpgsql(@"Host=ep-curly-night-85683084-pooler.eu-central-1.postgres.vercel-storage.com;Username=default;Password=Cj0uAMd7xKaB;Database=verceldb;Integrated Security=true;Pooling=true;");
    }


    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {

        modelBuilder.Entity<ForumPost>()
            .HasOne(_ => _.Profile)
            .WithMany()
            .HasForeignKey(_ => _.ProfileID);

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

        modelBuilder.Entity<Profile>()
            .HasMany(_ => _.Activity)
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
    public DbSet<API.Models.TrainingTag> TrainingTag { get; set; } = default!;
    public DbSet<API.Models.ForumTag> ForumTag { get; set; } = default!;
}

