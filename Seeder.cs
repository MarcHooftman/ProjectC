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
            AddTraining(context);
            AddAdmin(context);
        }
    }

    private static bool IsEmpty(AntesContext context)
    {
        if (context.ForumPost.Any()) return false;
        if (context.Profile.Any()) return false;
        if (context.Activity.Any()) return false;
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
                MemberSince=new DateOnly(2023, 1, 1),
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
                MemberSince=new DateOnly(2023, 1, 1),
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
                MemberSince=new DateOnly(2023, 1, 1),
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
        var Klaas = context.Profile.FirstOrDefault(_ => _.UserPrincipalName == "1000000@hr.nl");
        var Jan = context.Profile.FirstOrDefault(_ => _.UserPrincipalName == "1000001@hr.nl");
        var Frank = context.Profile.FirstOrDefault(_ => _.UserPrincipalName == "1000002@hr.nl");

        var activities = new List<Activity>
        {
            new()
            {
                Title = "Activiteit 1",
                Description = Lorem3,
                Location = "Nieuwe Binnenweg",
                Time = DateTime.SpecifyKind(new DateTime(
                    2023, 
                    6, 
                    2, 
                    17, 
                    0, 
                    0), DateTimeKind.Utc),
                Profiles = new List<Profile>() { Jan! }
            },

            new()
            {
                Title = "Activiteit 2",
                Description = Lorem3,
                Location = "Nieuwe Binnenweg",
                Time = DateTime.SpecifyKind(new DateTime(
                    2023, 
                    4, 
                    9, 
                    12, 
                    0, 
                    0), DateTimeKind.Utc),
                Profiles = new List<Profile>() {  }
            },

            new()
            {
                Title = "Activiteit 3",
                Description = Lorem3,
                Location = "Prinsenland",
                Time = DateTime.SpecifyKind(new DateTime(
                    2023, 
                    12, 
                    17, 
                    12, 
                    0, 
                    0), DateTimeKind.Utc),
                Profiles = new List<Profile>() { Jan! }
            },

            new()
            {
                Title = "Activiteit 4",
                Description = Lorem2,
                Location = "Portugaal",
                Time = DateTime.SpecifyKind(new DateTime(
                    2024, 
                    8, 
                    22, 
                    14, 
                    0, 
                    0), DateTimeKind.Utc),
                Profiles = new List<Profile>() { Frank! }
            },

            new()
            {
                Title = "Activiteit 5",
                Description = Lorem3,
                Location = "Prinsenland",
                Time = DateTime.SpecifyKind(new DateTime(
                    2024, 
                    1, 
                    5, 
                    15, 
                    0, 
                    0), DateTimeKind.Utc),
                Profiles = new List<Profile>() { Klaas! }
            },

            new()
            {
                Title = "Activiteit 6",
                Description = Lorem3,
                Location = "Nieuwe Binnenweg",
                Time = DateTime.SpecifyKind(new DateTime(
                    2024, 
                    7, 
                    18, 
                    12, 
                    0, 
                    0), DateTimeKind.Utc),
                Profiles = new List<Profile>() { Frank! }
            },

            new()
            {
                Title = "Activiteit 7",
                Description = Lorem1,
                Location = "Portugaal",
                Time = DateTime.SpecifyKind(new DateTime(
                    2024, 
                    11, 
                    1, 
                    20, 
                    0, 
                    0), DateTimeKind.Utc),
                Profiles = new List<Profile>() {  }
            },

            new()
            {
                Title = "Activiteit 8",
                Description = Lorem1,
                Location = "Nieuwe Binnenweg",
                Time = DateTime.SpecifyKind(new DateTime(
                    2024, 
                    7, 
                    2, 
                    10, 
                    0, 
                    0), DateTimeKind.Utc),
                Profiles = new List<Profile>() {  }
            },

            new()
            {
                Title = "Activiteit 9",
                Description = Lorem1,
                Location = "Prinsenland",
                Time = DateTime.SpecifyKind(new DateTime(
                    2023, 
                    9, 
                    21, 
                    13, 
                    0, 
                    0), DateTimeKind.Utc),
                Profiles = new List<Profile>() {  }
            },

            new()
            {
                Title = "Activiteit 10",
                Description = Lorem2,
                Location = "Portugaal",
                Time = DateTime.SpecifyKind(new DateTime(
                    2024, 
                    3, 
                    24, 
                    18, 
                    0, 
                    0), DateTimeKind.Utc),
                Profiles = new List<Profile>() { Jan! }
            },

            new()
            {
                Title = "Activiteit 11",
                Description = Lorem1,
                Location = "Nieuwe Binnenweg",
                Time = DateTime.SpecifyKind(new DateTime(
                    2024, 
                    2, 
                    20, 
                    18, 
                    0, 
                    0), DateTimeKind.Utc),
                Profiles = new List<Profile>() { Frank! }
            },

            new()
            {
                Title = "Activiteit 12",
                Description = Lorem3,
                Location = "Prinsenland",
                Time = DateTime.SpecifyKind(new DateTime(
                    2023, 
                    4, 
                    17, 
                    10, 
                    0, 
                    0), DateTimeKind.Utc),
                Profiles = new List<Profile>() { Jan! }
            },

            new()
            {
                Title = "Activiteit 13",
                Description = Lorem2,
                Location = "Prinsenland",
                Time = DateTime.SpecifyKind(new DateTime(
                    2024, 
                    3, 
                    2, 
                    9, 
                    0, 
                    0), DateTimeKind.Utc),
                Profiles = new List<Profile>() { Klaas! }
            },

            new()
            {
                Title = "Activiteit 14",
                Description = Lorem2,
                Location = "Nieuwe Binnenweg",
                Time = DateTime.SpecifyKind(new DateTime(
                    2024, 
                    3, 
                    10, 
                    11, 
                    0, 
                    0), DateTimeKind.Utc),
                Profiles = new List<Profile>() { Frank! }
            },

            new()
            {
                Title = "Activiteit 15",
                Description = Lorem3,
                Location = "Prinsenland",
                Time = DateTime.SpecifyKind(new DateTime(
                    2024, 
                    2, 
                    7, 
                    15, 
                    0, 
                    0), DateTimeKind.Utc),
                Profiles = new List<Profile>() {  }
            },

            new()
            {
                Title = "Activiteit 16",
                Description = Lorem1,
                Location = "Nieuwe Binnenweg",
                Time = DateTime.SpecifyKind(new DateTime(
                    2023, 
                    6, 
                    20, 
                    15, 
                    0, 
                    0), DateTimeKind.Utc),
                Profiles = new List<Profile>() { Jan! }
            },

            new()
            {
                Title = "Activiteit 17",
                Description = Lorem3,
                Location = "Portugaal",
                Time = DateTime.SpecifyKind(new DateTime(
                    2024, 
                    5, 
                    16, 
                    17, 
                    0, 
                    0), DateTimeKind.Utc),
                Profiles = new List<Profile>() { Jan! }
            },

            new()
            {
                Title = "Activiteit 18",
                Description = Lorem2,
                Location = "Prinsenland",
                Time = DateTime.SpecifyKind(new DateTime(
                    2024, 
                    5, 
                    11, 
                    14, 
                    0, 
                    0), DateTimeKind.Utc),
                Profiles = new List<Profile>() {  }
            },

            new()
            {
                Title = "Activiteit 19",
                Description = Lorem3,
                Location = "Prinsenland",
                Time = DateTime.SpecifyKind(new DateTime(
                    2024, 
                    9, 
                    26, 
                    17, 
                    0, 
                    0), DateTimeKind.Utc),
                Profiles = new List<Profile>() {  }
            },

            new()
            {
                Title = "Activiteit 20",
                Description = Lorem2,
                Location = "Portugaal",
                Time = DateTime.SpecifyKind(new DateTime(
                    2024, 
                    2, 
                    1, 
                    12, 
                    0, 
                    0), DateTimeKind.Utc),
                Profiles = new List<Profile>() { Frank! }
            },

            new()
            {
                Title = "Activiteit 21",
                Description = Lorem2,
                Location = "Nieuwe Binnenweg",
                Time = DateTime.SpecifyKind(new DateTime(
                    2023, 
                    8, 
                    25, 
                    11, 
                    0, 
                    0), DateTimeKind.Utc),
                Profiles = new List<Profile>() {  }
            },

            new()
            {
                Title = "Activiteit 22",
                Description = Lorem3,
                Location = "Portugaal",
                Time = DateTime.SpecifyKind(new DateTime(
                    2023, 
                    8, 
                    9, 
                    20, 
                    0, 
                    0), DateTimeKind.Utc),
                Profiles = new List<Profile>() { Frank! }
            },

            new()
            {
                Title = "Activiteit 23",
                Description = Lorem2,
                Location = "Portugaal",
                Time = DateTime.SpecifyKind(new DateTime(
                    2023, 
                    9, 
                    12, 
                    17, 
                    0, 
                    0), DateTimeKind.Utc),
                Profiles = new List<Profile>() { Klaas! }
            },

            new()
            {
                Title = "Activiteit 24",
                Description = Lorem1,
                Location = "Portugaal",
                Time = DateTime.SpecifyKind(new DateTime(
                    2024, 
                    12, 
                    9, 
                    10, 
                    0, 
                    0), DateTimeKind.Utc),
                Profiles = new List<Profile>() { Klaas! }
            },

            new()
            {
                Title = "Activiteit 25",
                Description = Lorem2,
                Location = "Portugaal",
                Time = DateTime.SpecifyKind(new DateTime(
                    2023, 
                    12, 
                    23, 
                    15, 
                    0, 
                    0), DateTimeKind.Utc),
                Profiles = new List<Profile>() { Frank! }
            },

            new()
            {
                Title = "Activiteit 26",
                Description = Lorem3,
                Location = "Nieuwe Binnenweg",
                Time = DateTime.SpecifyKind(new DateTime(
                    2024, 
                    1, 
                    11, 
                    10, 
                    0, 
                    0), DateTimeKind.Utc),
                Profiles = new List<Profile>() {  }
            },

            new()
            {
                Title = "Activiteit 27",
                Description = Lorem1,
                Location = "Prinsenland",
                Time = DateTime.SpecifyKind(new DateTime(
                    2024, 
                    10, 
                    5, 
                    16, 
                    0, 
                    0), DateTimeKind.Utc),
                Profiles = new List<Profile>() { Frank! }
            },

            new()
            {
                Title = "Activiteit 28",
                Description = Lorem2,
                Location = "Portugaal",
                Time = DateTime.SpecifyKind(new DateTime(
                    2024, 
                    3, 
                    5, 
                    12, 
                    0, 
                    0), DateTimeKind.Utc),
                Profiles = new List<Profile>() {  }
            },

            new()
            {
                Title = "Activiteit 29",
                Description = Lorem3,
                Location = "Portugaal",
                Time = DateTime.SpecifyKind(new DateTime(
                    2024, 
                    3, 
                    27, 
                    20, 
                    0, 
                    0), DateTimeKind.Utc),
                Profiles = new List<Profile>() { Frank! }
            },

            new()
            {
                Title = "Activiteit 30",
                Description = Lorem3,
                Location = "Portugaal",
                Time = DateTime.SpecifyKind(new DateTime(
                    2024, 
                    6, 
                    8, 
                    20, 
                    0, 
                    0), DateTimeKind.Utc),
                Profiles = new List<Profile>() { Klaas! }
            },

            new()
            {
                Title = "Activiteit 31",
                Description = Lorem2,
                Location = "Portugaal",
                Time = DateTime.SpecifyKind(new DateTime(
                    2023, 
                    7, 
                    20, 
                    13, 
                    0, 
                    0), DateTimeKind.Utc),
                Profiles = new List<Profile>() { Jan! }
            },

            new()
            {
                Title = "Activiteit 32",
                Description = Lorem1,
                Location = "Nieuwe Binnenweg",
                Time = DateTime.SpecifyKind(new DateTime(
                    2023, 
                    11, 
                    14, 
                    14, 
                    0, 
                    0), DateTimeKind.Utc),
                Profiles = new List<Profile>() { Frank! }
            },

            new()
            {
                Title = "Activiteit 33",
                Description = Lorem3,
                Location = "Nieuwe Binnenweg",
                Time = DateTime.SpecifyKind(new DateTime(
                    2023, 
                    11, 
                    17, 
                    9, 
                    0, 
                    0), DateTimeKind.Utc),
                Profiles = new List<Profile>() { Jan! }
            },

            new()
            {
                Title = "Activiteit 34",
                Description = Lorem1,
                Location = "Prinsenland",
                Time = DateTime.SpecifyKind(new DateTime(
                    2024, 
                    3, 
                    2, 
                    13, 
                    0, 
                    0), DateTimeKind.Utc),
                Profiles = new List<Profile>() {  }
            },

            new()
            {
                Title = "Activiteit 35",
                Description = Lorem2,
                Location = "Portugaal",
                Time = DateTime.SpecifyKind(new DateTime(
                    2023, 
                    4, 
                    17, 
                    17, 
                    0, 
                    0), DateTimeKind.Utc),
                Profiles = new List<Profile>() { Jan! }
            },

            new()
            {
                Title = "Activiteit 36",
                Description = Lorem2,
                Location = "Nieuwe Binnenweg",
                Time = DateTime.SpecifyKind(new DateTime(
                    2024, 
                    11, 
                    22, 
                    12, 
                    0, 
                    0), DateTimeKind.Utc),
                Profiles = new List<Profile>() {  }
            },

            new()
            {
                Title = "Activiteit 37",
                Description = Lorem1,
                Location = "Prinsenland",
                Time = DateTime.SpecifyKind(new DateTime(
                    2024, 
                    12, 
                    9, 
                    13, 
                    0, 
                    0), DateTimeKind.Utc),
                Profiles = new List<Profile>() { Frank! }
            },

            new()
            {
                Title = "Activiteit 38",
                Description = Lorem2,
                Location = "Prinsenland",
                Time = DateTime.SpecifyKind(new DateTime(
                    2024, 
                    1, 
                    20, 
                    18, 
                    0, 
                    0), DateTimeKind.Utc),
                Profiles = new List<Profile>() { Klaas! }
            },

            new()
            {
                Title = "Activiteit 39",
                Description = Lorem2,
                Location = "Prinsenland",
                Time = DateTime.SpecifyKind(new DateTime(
                    2024, 
                    2, 
                    16, 
                    18, 
                    0, 
                    0), DateTimeKind.Utc),
                Profiles = new List<Profile>() { Klaas! }
            },

            new()
            {
                Title = "Activiteit 40",
                Description = Lorem3,
                Location = "Nieuwe Binnenweg",
                Time = DateTime.SpecifyKind(new DateTime(
                    2023, 
                    10, 
                    14, 
                    11, 
                    0, 
                    0), DateTimeKind.Utc),
                Profiles = new List<Profile>() {  }
            },

            new()
            {
                Title = "Activiteit 41",
                Description = Lorem2,
                Location = "Portugaal",
                Time = DateTime.SpecifyKind(new DateTime(
                    2024, 
                    3, 
                    11, 
                    19, 
                    0, 
                    0), DateTimeKind.Utc),
                Profiles = new List<Profile>() { Frank! }
            },

            new()
            {
                Title = "Activiteit 42",
                Description = Lorem3,
                Location = "Portugaal",
                Time = DateTime.SpecifyKind(new DateTime(
                    2024, 
                    3, 
                    13, 
                    9, 
                    0, 
                    0), DateTimeKind.Utc),
                Profiles = new List<Profile>() { Frank! }
            },

            new()
            {
                Title = "Activiteit 43",
                Description = Lorem1,
                Location = "Portugaal",
                Time = DateTime.SpecifyKind(new DateTime(
                    2024, 
                    10, 
                    16, 
                    18, 
                    0, 
                    0), DateTimeKind.Utc),
                Profiles = new List<Profile>() {  }
            },

            new()
            {
                Title = "Activiteit 44",
                Description = Lorem2,
                Location = "Nieuwe Binnenweg",
                Time = DateTime.SpecifyKind(new DateTime(
                    2023, 
                    11, 
                    21, 
                    13, 
                    0, 
                    0), DateTimeKind.Utc),
                Profiles = new List<Profile>() {  }
            },

            new()
            {
                Title = "Activiteit 45",
                Description = Lorem2,
                Location = "Nieuwe Binnenweg",
                Time = DateTime.SpecifyKind(new DateTime(
                    2024, 
                    12, 
                    10, 
                    19, 
                    0, 
                    0), DateTimeKind.Utc),
                Profiles = new List<Profile>() { Jan! }
            },

            new()
            {
                Title = "Activiteit 46",
                Description = Lorem3,
                Location = "Nieuwe Binnenweg",
                Time = DateTime.SpecifyKind(new DateTime(
                    2023, 
                    8, 
                    17, 
                    17, 
                    0, 
                    0), DateTimeKind.Utc),
                Profiles = new List<Profile>() { Jan! }
            },

            new()
            {
                Title = "Activiteit 47",
                Description = Lorem1,
                Location = "Nieuwe Binnenweg",
                Time = DateTime.SpecifyKind(new DateTime(
                    2024, 
                    1, 
                    17, 
                    9, 
                    0, 
                    0), DateTimeKind.Utc),
                Profiles = new List<Profile>() { Klaas! }
            },

            new()
            {
                Title = "Activiteit 48",
                Description = Lorem1,
                Location = "Portugaal",
                Time = DateTime.SpecifyKind(new DateTime(
                    2023, 
                    8, 
                    21, 
                    10, 
                    0, 
                    0), DateTimeKind.Utc),
                Profiles = new List<Profile>() {  }
            },

            new()
            {
                Title = "Activiteit 49",
                Description = Lorem3,
                Location = "Nieuwe Binnenweg",
                Time = DateTime.SpecifyKind(new DateTime(
                    2023, 
                    11, 
                    19, 
                    21, 
                    0, 
                    0), DateTimeKind.Utc),
                Profiles = new List<Profile>() { Klaas! }
            },

        };

        context.Activity.AddRange(activities);
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
                Url = "https://www.youtube.com/embed/dQw4w9WgXcQ?si=85vUjBYkGD0TeNp6&autoplay=1&muted=1",
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
                Url = "https://www.youtube.com/embed/dQw4w9WgXcQ?si=85vUjBYkGD0TeNp6&autoplay=1&muted=1",
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
                Url = "https://www.youtube.com/embed/dQw4w9WgXcQ?si=85vUjBYkGD0TeNp6&autoplay=1&muted=1",
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
                Url = "https://www.youtube.com/embed/dQw4w9WgXcQ?si=85vUjBYkGD0TeNp6&autoplay=1&muted=1",
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


