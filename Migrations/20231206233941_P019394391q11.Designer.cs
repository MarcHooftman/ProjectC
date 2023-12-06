﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace ProjectC.Migrations
{
    [DbContext(typeof(AntesContext))]
    [Migration("20231206233941_P019394391q11")]
    partial class P019394391q11
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

            modelBuilder.Entity("API.Models.Admin", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("ID"));

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int?>("Level")
                        .HasColumnType("integer");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("ID");

                    b.ToTable("Admin");
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

            modelBuilder.Entity("API.Models.Like", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("ID"));

                    b.Property<int>("ForumPostID")
                        .HasColumnType("integer");

                    b.Property<int>("ProfileID")
                        .HasColumnType("integer");

                    b.HasKey("ID");

                    b.HasIndex("ForumPostID");

                    b.ToTable("Like");
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

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("FullName")
                        .HasColumnType("text");

                    b.Property<DateTime?>("LastLogin")
                        .HasColumnType("timestamp with time zone");

                    b.Property<DateOnly?>("MemberSince")
                        .HasColumnType("date");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("text");

                    b.Property<int?>("ProfilePictureID")
                        .HasColumnType("integer");

                    b.Property<string>("Role")
                        .HasColumnType("text");

                    b.Property<string>("UserPrincipalName")
                        .HasColumnType("text");

                    b.HasKey("ID");

                    b.HasIndex("ProfilePictureID");

                    b.ToTable("Profile");
                });

            modelBuilder.Entity("API.Models.Report", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("ID"));

                    b.Property<string>("Elaboration")
                        .HasColumnType("text");

                    b.Property<int>("ForumPostID")
                        .HasColumnType("integer");

                    b.Property<bool>("Inappropriate")
                        .HasColumnType("boolean");

                    b.Property<bool>("NotWorkRelated")
                        .HasColumnType("boolean");

                    b.Property<bool>("Other")
                        .HasColumnType("boolean");

                    b.Property<int>("ProfileID")
                        .HasColumnType("integer");

                    b.Property<bool>("Spam")
                        .HasColumnType("boolean");

                    b.HasKey("ID");

                    b.HasIndex("ForumPostID");

                    b.ToTable("Report");
                });

            modelBuilder.Entity("API.Models.Tag", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("ID"));

                    b.Property<int>("ForumPostID")
                        .HasColumnType("integer");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int?>("TrainingID")
                        .HasColumnType("integer");

                    b.HasKey("ID");

                    b.HasIndex("ForumPostID");

                    b.HasIndex("TrainingID");

                    b.ToTable("Tag");
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

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("ID");

                    b.HasIndex("MediaID");

                    b.ToTable("Training");
                });

            modelBuilder.Entity("ProfileTraining", b =>
                {
                    b.Property<int>("ProfileID")
                        .HasColumnType("integer");

                    b.Property<int>("TrainingID")
                        .HasColumnType("integer");

                    b.HasKey("ProfileID", "TrainingID");

                    b.HasIndex("TrainingID");

                    b.ToTable("ProfileTraining");
                });

            modelBuilder.Entity("API.Models.ForumPost", b =>
                {
                    b.HasOne("API.Models.ForumPost", null)
                        .WithMany("Comments")
                        .HasForeignKey("ForumPostID")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("API.Models.Profile", "Profile")
                        .WithMany()
                        .HasForeignKey("ProfileID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Profile");
                });

            modelBuilder.Entity("API.Models.Like", b =>
                {
                    b.HasOne("API.Models.ForumPost", null)
                        .WithMany("Likes")
                        .HasForeignKey("ForumPostID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("API.Models.Profile", b =>
                {
                    b.HasOne("API.Models.Media", "ProfilePicture")
                        .WithMany()
                        .HasForeignKey("ProfilePictureID");

                    b.Navigation("ProfilePicture");
                });

            modelBuilder.Entity("API.Models.Report", b =>
                {
                    b.HasOne("API.Models.ForumPost", null)
                        .WithMany("Reports")
                        .HasForeignKey("ForumPostID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("API.Models.Tag", b =>
                {
                    b.HasOne("API.Models.ForumPost", null)
                        .WithMany("Tags")
                        .HasForeignKey("ForumPostID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("API.Models.Training", null)
                        .WithMany("Tags")
                        .HasForeignKey("TrainingID");
                });

            modelBuilder.Entity("API.Models.Training", b =>
                {
                    b.HasOne("API.Models.Media", "Media")
                        .WithMany()
                        .HasForeignKey("MediaID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Media");
                });

            modelBuilder.Entity("ProfileTraining", b =>
                {
                    b.HasOne("API.Models.Profile", null)
                        .WithMany()
                        .HasForeignKey("ProfileID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("API.Models.Training", null)
                        .WithMany()
                        .HasForeignKey("TrainingID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("API.Models.ForumPost", b =>
                {
                    b.Navigation("Comments");

                    b.Navigation("Likes");

                    b.Navigation("Reports");

                    b.Navigation("Tags");
                });

            modelBuilder.Entity("API.Models.Training", b =>
                {
                    b.Navigation("Tags");
                });
#pragma warning restore 612, 618
        }
    }
}
