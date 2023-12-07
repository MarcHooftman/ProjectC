// using API.Models;

// // namespace API.Models;

// // public class Profile
// // {
// //     public int ID { get; set; }
// //     public string Email { get; set; } = null!;
// //     public string? FullName { get; set; }
// //     public string? Bio { get; set; }
// //     public DateOnly? MemberSince { get; set; }
// //     public DateTime? LastLogin { get; set; }
// //     public string? Role { get; set; }
// //     public DateOnly? DateOfBirth { get; set; }
// //     public string? Department { get; set; }
// //     public int? ProfilePictureID { get; set; }
// //     public Media? ProfilePicture { get; set; }
// //     public string? PhoneNumber { get; set; }
// //     public string? UserPrincipalName { get; set; }

// //     // navigational
// //     public IEnumerable<Training>? Training { get; set; }
// // }

// // namespace API.Models;

// // public class Activity
// // {
// //     public int ID { get; set; }
// //     public string Title { get; set; } = null!;
// //     public string Description { get; set; } = null!;
// //     public string Location { get; set; } = null!;
// //     public DateTime Time { get; set; }
// // }

// // namespace API.Models;

// // public class ForumPost
// // {
// //     public int ID { get; set; }
// //     public string Title { get; set; } = null!;
// //     public string Content { get; set; } = null!;
// //     public IEnumerable<Tag>? Tags { get; set; }
// //     public int ProfileID { get; set; }
// //     public Profile? Profile { get; set; }
// //     public DateTime Time { get; set; }
// //     public int? ForumPostID { get; set; }
// //     public IEnumerable<ForumPost>? Comments { get; set; }
// //     public IEnumerable<Like>? Likes { get; set; }
// //     public IEnumerable<Report>? Reports { get; set; }
// // }



// public static class Seeder
// {
//     public static void Initialize(AntesContext context)
//     {
//         context.Database.EnsureCreated();

//         // Seed data
//         AddProfiles(context);
//     }

//     private static void AddProfiles(AntesContext context) 
//     {
//         if (context.Profile.Any()) return;

//         var profiles = new Profile[]
//         {
//             new Profile{
//                 Email="1000000@hr.nl",
//                 FullName="Klaas Klaassen",
//                 Bio="I'm a student at Hogeschool Rotterdam",
//                 MemberSince=new DateOnly(2021, 1, 1),
//                 LastLogin=DateTime.Now,
//                 Role="User",
//                 DateOfBirth=new DateOnly(2001, 1, 1),
//                 Department="ICT",
//                 PhoneNumber="0612345678",
//                 UserPrincipalName="1000000@hr.nl",
//             },
//             new Profile{
//                 Email="1000001@hr.nl",
//                 FullName="Jan Janssen",
//                 Bio="I'm a student at Hogeschool Rotterdam",
//                 MemberSince=new DateOnly(2021, 1, 1),
//                 LastLogin=DateTime.Now,
//                 Role="User",
//                 DateOfBirth=new DateOnly(2001, 1, 1),
//                 Department="ICT",
//                 PhoneNumber="0612345678",
//                 UserPrincipalName="1000001@hr.nl",
//             },
//             new Profile{
//                 Email="1000002@hr.nl",
//                 FullName="Frank Frankken",
//                 Bio="I'm a student at Hogeschool Rotterdam",
//                 MemberSince=new DateOnly(2021, 1, 1),
//                 LastLogin=DateTime.Now,
//                 Role="User",
//                 DateOfBirth=new DateOnly(2001, 1, 1),
//                 Department="ICT",
//                 PhoneNumber="0612345678",
//                 UserPrincipalName="1000002@hr.nl",
//             },
//         };

//         foreach (Profile profile in profiles)
//         {
//             context.Profile.Add(profile);
//         }

//         context.SaveChanges();
//     }

// namespace API.Models;

// public class Tag
// {
//     public int ID { get; set; }
//     public string Name { get; set; } = null!;
// }

using API.Models;
using System;
using System.Collections.Generic;

namespace API;

public static class Seeder
{
    public static void Initialize(AntesContext context)
    {
        context.Database.EnsureCreated();

        if (IsEmpty(context))
        {
            AddTags(context);
            AddProfiles(context);
            AddActivities(context);
            AddForumPosts(context);
            AddMedia(context);
            AddTraining(context);
            AddAdmin(context);
        }
    }

    private static bool IsEmpty(AntesContext context)
    {
        if (context.ForumPost.Any()) return false;
        if (context.Profile.Any()) return false;
        if (context.Activity.Any()) return false;
        if (context.Media.Any()) return false;
        if (context.Training.Any()) return false;
        if (context.Like.Any()) return false;
        if (context.Report.Any()) return false;
        if (context.Tag.Any()) return false;
        if (context.Admin.Any()) return false;
        return true;
    }

    private static void AddProfiles(AntesContext context)
    {
        var profiles = new Profile[]
        {
            new()
            {
                Email="1000000@hr.nl",
                FullName="Klaas Klaassen",
                Bio="I'm a student at Hogeschool Rotterdam",
                MemberSince=new DateOnly(2021, 1, 1),
                LastLogin=DateTime.UtcNow,
                Role="User",
                DateOfBirth=new DateOnly(2001, 1, 1),
                Department="ICT",
                PhoneNumber="0612345678",
                UserPrincipalName="1000000@hr.nl",
            },
            new()
            {
                Email="1000001@hr.nl",
                FullName="Jan Janssen",
                Bio="I'm a student at Hogeschool Rotterdam",
                MemberSince=new DateOnly(2021, 1, 1),
                LastLogin=DateTime.UtcNow,
                Role="User",
                DateOfBirth=new DateOnly(2001, 1, 1),
                Department="ICT",
                PhoneNumber="0612345678",
                UserPrincipalName="1000001@hr.nl",
            },
            new()
            {
                Email="1000002@hr.nl",
                FullName="Frank Frankken",
                Bio="I'm a student at Hogeschool Rotterdam",
                MemberSince=new DateOnly(2021, 1, 1),
                LastLogin=DateTime.UtcNow,
                Role="User",
                DateOfBirth=new DateOnly(2001, 1, 1),
                Department="ICT",
                PhoneNumber="0612345678",
                UserPrincipalName="1000002@hr.nl",
            },
        };

        foreach (Profile profile in profiles)
        {
            context.Profile.Add(profile);
        }

        context.SaveChanges();
    }

    private static void AddActivities(AntesContext context)
    {
        var activities = new List<Activity>
        {
            new()
            {
                Title = "First Activity",
                Description = "This is the first activity.",
                Location = "Rotterdam",
                Time = DateTime.UtcNow
            },
            new()
            {
                Title = "Second Activity",
                Description = "This is the second activity.",
                Location = "Rotterdam",
                Time = DateTime.UtcNow
            }
        };

        context.Activity.AddRange(activities);
        context.SaveChanges();
    }
    private static void AddMedia(AntesContext context)
    {
        var media = new List<Media>
        {
            new()
            {
                Type = "youtube video",
                URL = "https://www.youtube.com/embed/dQw4w9WgXcQ?si=85vUjBYkGD0TeNp6",
            }
        };

        context.Media.AddRange(media);
        context.SaveChanges();
    }
    
    private static void AddTags(AntesContext context)
    {
        var tags = new List<Tag>
        {
            new()
            {
                ID = 1,
                Name = "Tag 1"
            },
            new()
            {
                ID = 2,
                Name = "Tag 2"
            },
            new()
            {
                ID = 3,
                Name = "Tag 3"
            },
            new()
            {
                ID = 4,
                Name = "Tag 4"
            },
            new()
            {
                ID = 5,
                Name = "Tag 5"
            }
        };

        context.Tag.AddRange(tags);
        context.SaveChanges();
    }
    
    private static void AddTraining(AntesContext context)
    {
        var tag1 = context.Tag.Find(1);
        var tag2 = context.Tag.Find(2);
        var tag3 = context.Tag.Find(3);
        var tag4 = context.Tag.Find(4);
        var tag5 = context.Tag.Find(5);
        var training = new List<Training>
        {
            new()
            {
                Title = "Test training 1",
                Description = "Dit is de eerste Test Training",
                MediaID = 1,
                Tags = new List<Tag>
                {
                    tag1!,
                    tag2!,
                    tag3!
                },
            },
            new()
            {
                Title = "Test training 2",
                Description = "Dit is de tweede Test Training",
                MediaID = 1,
                Tags = new List<Tag>
                {
                    tag5!,
                    tag1!,
                    tag2!,
                },
            },
            new()
            {
                Title = "Test training 3",
                Description = "Dit is de derde Test Training",
                MediaID = 1,
                Tags = new List<Tag>
                {
                    tag4!,
                    tag1!,
                    tag2!,
                },
            },
            new()
            {
                Title = "Test training 4",
                Description = "Dit is de vierde Test Training",
                MediaID = 1,
                Tags = new List<Tag>
                {

                    tag2!,
                    tag3!,
                },
            },
        };

        context.Training.AddRange(training);
        context.SaveChanges();
    }

    private static void AddForumPosts(AntesContext context)
    {
        var tag1 = context.Tag.Find(1);
        var tag2 = context.Tag.Find(2);
        var tag3 = context.Tag.Find(3);
        var tag4 = context.Tag.Find(4);
        var tag5 = context.Tag.Find(5);
        var forumPosts = new List<ForumPost>
        {
            new()
            {
                Title = "First Post",
                Content = "This is the first post.",
                Tags = new List<Tag>
                {
                    tag1!,
                    tag2!,
                    tag3!,
                },
                ProfileID = 1,
                Profile = null,
                Time = DateTime.UtcNow,
                ForumPostID = null,
                Comments = new List<ForumPost>
                {
                    new()
                    {
                        Title = "Comment 1",
                        Content = "This is a comment on the first post.",
                        Tags = new List<Tag>
                            {
                                tag1!,

                            },
                        ProfileID = 2,
                        Profile = null,
                        Time = DateTime.UtcNow,
                        ForumPostID = 1,
                        Comments = new List<ForumPost>
                        {
                            new()
                            {
                                Title = "Sub Comment 1",
                                Content = "This is a sub comment on the firstcomment.",
                                Tags = new List<Tag>
                                    {
                                        tag1!,

                                    },
                                ProfileID = 3,
                                Profile = null,
                                Time = DateTime.UtcNow,
                                ForumPostID = 2,
                                Comments = new List<ForumPost>(),
                                Likes = new List<Like>(),
                                Reports = new List<Report>()
                            }
                        },
                        Likes = new List<Like>(),
                        Reports = new List<Report>()
                    },
                    new()
                    {
                        Title = "Comment 2",
                        Content = "This is another comment on the first post.",
                        Tags = new List<Tag>(),
                        ProfileID = 3,
                        Profile = null,
                        Time = DateTime.UtcNow,
                        ForumPostID = 1,
                        Comments = new List<ForumPost>(),
                        Likes = new List<Like>(),
                        Reports = new List<Report>()
                    }
                },
                Likes = new List<Like>(),
                Reports = new List<Report>()
            },
            new()
            {
                Title = "Second Post",
                Content = "This is the second post.",
                Tags = new List<Tag>(),
                ProfileID = 2,
                Profile = null,
                Time = DateTime.UtcNow,
                ForumPostID = null,
                Comments = new List<ForumPost>(),
                Likes = new List<Like>(),
                Reports = new List<Report>()
            }
        };

        context.ForumPost.AddRange(forumPosts);
        context.SaveChanges();
    }

    private static void AddAdmin(AntesContext context)
    {
        var admin = new Admin
        {
            Email = "admin@ad.min",
            Password = "admin"
        };

        context.Admin.Add(admin);
        context.SaveChanges();
    }
}


