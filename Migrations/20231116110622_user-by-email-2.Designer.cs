﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace probeersel.Migrations
{
    [DbContext(typeof(AntesContext))]
    [Migration("20231116110622_user-by-email-2")]
    partial class userbyemail2
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.10")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("API.Models.Activity", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("ID"));

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Location")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<DateTime>("Time")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("ID");

                    b.ToTable("Activity");
                });

            modelBuilder.Entity("API.Models.ForumPost", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("ID"));

                    b.Property<string>("Content")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int?>("ForumPostID")
                        .HasColumnType("integer");

                    b.Property<int>("ProfileID")
                        .HasColumnType("integer");

                    b.Property<string[]>("Tags")
                        .IsRequired()
                        .HasColumnType("text[]");

                    b.Property<DateTime>("Time")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("ID");

                    b.HasIndex("ForumPostID");

                    b.HasIndex("ProfileID");

                    b.ToTable("ForumPost");
                });

            modelBuilder.Entity("API.Models.Media", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("ID"));

                    b.Property<string>("Type")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("URL")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("ID");

                    b.ToTable("Media");
                });

            modelBuilder.Entity("API.Models.Profile", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("ID"));

                    b.Property<string>("Bio")
                        .HasColumnType("text");

                    b.Property<DateOnly?>("DateOfBirth")
                        .HasColumnType("date");

                    b.Property<string>("Department")
                        .HasColumnType("text");

                    b.Property<int?>("ForumPostID")
                        .HasColumnType("integer");

                    b.Property<int?>("ForumPostID1")
                        .HasColumnType("integer");

                    b.Property<string>("FullName")
                        .HasColumnType("text");

                    b.Property<DateTime?>("LastLogin")
                        .HasColumnType("timestamp with time zone");

                    b.Property<DateOnly?>("MemberSince")
                        .HasColumnType("date");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("text");

                    b.Property<int>("ProfilePictureID")
                        .HasColumnType("integer");

                    b.Property<string>("Role")
                        .HasColumnType("text");

                    b.Property<int>("UserID")
                        .HasColumnType("integer");

                    b.HasKey("ID");

                    b.HasIndex("ForumPostID");

                    b.HasIndex("ForumPostID1");

                    b.HasIndex("ProfilePictureID");

                    b.HasIndex("UserID");

                    b.ToTable("Profile");
                });

            modelBuilder.Entity("API.Models.Training", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("ID"));

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("MediaID")
                        .HasColumnType("integer");

                    b.Property<int?>("ProfileID")
                        .HasColumnType("integer");

                    b.Property<string[]>("Tags")
                        .IsRequired()
                        .HasColumnType("text[]");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("ID");

                    b.HasIndex("MediaID");

                    b.HasIndex("ProfileID");

                    b.ToTable("Training");
                });

            modelBuilder.Entity("API.Models.User", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("ID"));

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("ID");

                    b.ToTable("User");
                });

            modelBuilder.Entity("API.Models.ForumPost", b =>
                {
                    b.HasOne("API.Models.ForumPost", null)
                        .WithMany("Comments")
                        .HasForeignKey("ForumPostID");

                    b.HasOne("API.Models.Profile", "Profile")
                        .WithMany()
                        .HasForeignKey("ProfileID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired()
                        .HasConstraintName("FKprofile");

                    b.Navigation("Profile");
                });

            modelBuilder.Entity("API.Models.Profile", b =>
                {
                    b.HasOne("API.Models.ForumPost", null)
                        .WithMany("Likes")
                        .HasForeignKey("ForumPostID");

                    b.HasOne("API.Models.ForumPost", null)
                        .WithMany("Reports")
                        .HasForeignKey("ForumPostID1");

                    b.HasOne("API.Models.Media", "ProfilePicture")
                        .WithMany()
                        .HasForeignKey("ProfilePictureID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired()
                        .HasConstraintName("FKmedia");

                    b.HasOne("API.Models.User", "User")
                        .WithMany()
                        .HasForeignKey("UserID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired()
                        .HasConstraintName("FKuser");

                    b.Navigation("ProfilePicture");

                    b.Navigation("User");
                });

            modelBuilder.Entity("API.Models.Training", b =>
                {
                    b.HasOne("API.Models.Media", "Media")
                        .WithMany()
                        .HasForeignKey("MediaID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired()
                        .HasConstraintName("FKmedia");

                    b.HasOne("API.Models.Profile", null)
                        .WithMany("TrainingsWatched")
                        .HasForeignKey("ProfileID");

                    b.Navigation("Media");
                });

            modelBuilder.Entity("API.Models.ForumPost", b =>
                {
                    b.Navigation("Comments");

                    b.Navigation("Likes");

                    b.Navigation("Reports");
                });

            modelBuilder.Entity("API.Models.Profile", b =>
                {
                    b.Navigation("TrainingsWatched");
                });
#pragma warning restore 612, 618
        }
    }
}
