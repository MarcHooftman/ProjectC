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
    private static readonly string Lorem1 = @"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, sit temporibus, ratione id cumque ea in, at sunt odit error maiores. Nisi modi quas minus. Necessitatibus autem distinctio quasi ab.";
    private static readonly string Lorem2 = @"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, sit temporibus, ratione id cumque ea in, at sunt odit error maiores. Nisi modi quas minus. Necessitatibus autem distinctio quasi ab. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, sit temporibus, ratione id cumque ea in, at sunt odit error maiores. Nisi modi quas minus. Necessitatibus autem distinctio quasi ab.";
    private static readonly string Lorem3 = @"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, sit temporibus, ratione id cumque ea in, at sunt odit error maiores. Nisi modi quas minus. Necessitatibus autem distinctio quasi ab. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, sit temporibus, ratione id cumque ea in, at sunt odit error maiores. Nisi modi quas minus. Necessitatibus autem distinctio quasi ab. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, sit temporibus, ratione id cumque ea in, at sunt odit error maiores. Nisi modi quas minus. Necessitatibus autem distinctio quasi ab.";
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
                Bio=Lorem3,
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
                Bio=Lorem1,
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
                Bio=Lorem2,
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
                Title = "Activiteit 1",
                Description = Lorem3,
                Location = "Rotterdam",
                Time = DateTime.SpecifyKind(new DateTime(2024, 11, 28, 18, 0, 0), DateTimeKind.Utc),
            },
            new()
            {
                Title = "Activiteit 2",
                Description = Lorem1,
                Location = "Rotterdam",
                Time = DateTime.SpecifyKind(new DateTime(2024, 11, 29, 15, 0, 0), DateTimeKind.Utc),
            },
            new()
            {
                Title = "Activiteit 3",
                Description = Lorem2,
                Location = "Rotterdam",
                Time = DateTime.SpecifyKind(new DateTime(2024, 12, 2, 16, 0, 0), DateTimeKind.Utc),
            },
            new()
            {
                Title = "Activiteit 4",
                Description = Lorem2,
                Location = "Rotterdam",
                Time = DateTime.SpecifyKind(new DateTime(2024, 12, 2, 17, 0, 0), DateTimeKind.Utc),
            },
            new()
            {
                Title = "Activiteit 5",
                Description = Lorem3,
                Location = "Rotterdam",
                Time = DateTime.SpecifyKind(new DateTime(2024, 12, 3, 20, 0, 0), DateTimeKind.Utc),
            },
            new()
            {
                Title = "Activiteit 6",
                Description = Lorem3,
                Location = "Rotterdam",
                Time = DateTime.SpecifyKind(new DateTime(2024, 12, 3, 21, 0, 0), DateTimeKind.Utc),
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
                URL = "https://www.youtube.com/embed/dQw4w9WgXcQ?si=85vUjBYkGD0TeNp6&autoplay=1&muted=1",
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
                Name = "Tag 1"
            },
            new()
            {
                Name = "Tag 2"
            },
            new()
            {
                Name = "Tag 3"
            },
            new()
            {
                Name = "Tag 4"
            },
            new()
            {
                Name = "Tag 5"
            }
        };

        context.Tag.AddRange(tags);
        context.SaveChanges();
    }

    private static void AddTraining(AntesContext context)
    {
        var tag1 = context.Tag.Find("Tag 1");
        var tag2 = context.Tag.Find("Tag 2");
        var tag3 = context.Tag.Find("Tag 3");
        var tag4 = context.Tag.Find("Tag 4");
        var tag5 = context.Tag.Find("Tag 5");
        var training = new List<Training>
        {
            new()
            {
                Title = "Training 1",
                Description = Lorem2,
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
                Title = "Training 2",
                Description = Lorem1,
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
                Title = "Training 3",
                Description = Lorem3,
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
                Title = "Training 4",
                Description = Lorem1,
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
        var tag1 = context.Tag.Find("Tag 1");
        var tag2 = context.Tag.Find("Tag 2");
        var tag3 = context.Tag.Find("Tag 3");
        var tag4 = context.Tag.Find("Tag 4");
        var tag5 = context.Tag.Find("Tag 5");
        var forumPosts = new List<ForumPost>
        {
            new()
            {
                Title = "Lorem Ipsum",
                Content = Lorem3,
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
                        Title = "",
                        Content = Lorem1,
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
                                Title = "",
                                Content = Lorem2,
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
                        Title = "",
                        Content = Lorem1,
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
                Likes = new List<Like>()
                {
                    new()
                    {
                        ProfileID = 1,
                        ForumPostID = 1,
                    },
                    new()
                    {
                        ProfileID = 2,
                        ForumPostID = 1,
                    },
                    new()
                    {
                        ProfileID = 3,
                        ForumPostID = 1,
                    },
                },
                Reports = new List<Report>()
            },
            new()
            {
                Title = "Lorem",
                Content = Lorem1,
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


