using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace probeersel.Migrations
{
    /// <inheritdoc />
    public partial class baruibgvosurbog2380280A : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ForumPost_ForumPost_ParentPostID",
                table: "ForumPost");

            migrationBuilder.DropTable(
                name: "PostTag");

            migrationBuilder.DropTable(
                name: "TrainingProfile");

            migrationBuilder.DropTable(
                name: "TrainingTag");

            migrationBuilder.RenameColumn(
                name: "ParentPostID",
                table: "ForumPost",
                newName: "ForumPostID");

            migrationBuilder.RenameIndex(
                name: "IX_ForumPost_ParentPostID",
                table: "ForumPost",
                newName: "IX_ForumPost_ForumPostID");

            migrationBuilder.AddColumn<int>(
                name: "ProfileID",
                table: "Training",
                type: "integer",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "ForumPostID",
                table: "Tag",
                type: "integer",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "TrainingID",
                table: "Tag",
                type: "integer",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Training_ProfileID",
                table: "Training",
                column: "ProfileID");

            migrationBuilder.CreateIndex(
                name: "IX_Tag_ForumPostID",
                table: "Tag",
                column: "ForumPostID");

            migrationBuilder.CreateIndex(
                name: "IX_Tag_TrainingID",
                table: "Tag",
                column: "TrainingID");

            migrationBuilder.AddForeignKey(
                name: "FK_ForumPost_ForumPost_ForumPostID",
                table: "ForumPost",
                column: "ForumPostID",
                principalTable: "ForumPost",
                principalColumn: "ID");

            migrationBuilder.AddForeignKey(
                name: "FK_Tag_ForumPost_ForumPostID",
                table: "Tag",
                column: "ForumPostID",
                principalTable: "ForumPost",
                principalColumn: "ID");

            migrationBuilder.AddForeignKey(
                name: "FK_Tag_Training_TrainingID",
                table: "Tag",
                column: "TrainingID",
                principalTable: "Training",
                principalColumn: "ID");

            migrationBuilder.AddForeignKey(
                name: "FK_Training_Profile_ProfileID",
                table: "Training",
                column: "ProfileID",
                principalTable: "Profile",
                principalColumn: "ID");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ForumPost_ForumPost_ForumPostID",
                table: "ForumPost");

            migrationBuilder.DropForeignKey(
                name: "FK_Tag_ForumPost_ForumPostID",
                table: "Tag");

            migrationBuilder.DropForeignKey(
                name: "FK_Tag_Training_TrainingID",
                table: "Tag");

            migrationBuilder.DropForeignKey(
                name: "FK_Training_Profile_ProfileID",
                table: "Training");

            migrationBuilder.DropIndex(
                name: "IX_Training_ProfileID",
                table: "Training");

            migrationBuilder.DropIndex(
                name: "IX_Tag_ForumPostID",
                table: "Tag");

            migrationBuilder.DropIndex(
                name: "IX_Tag_TrainingID",
                table: "Tag");

            migrationBuilder.DropColumn(
                name: "ProfileID",
                table: "Training");

            migrationBuilder.DropColumn(
                name: "ForumPostID",
                table: "Tag");

            migrationBuilder.DropColumn(
                name: "TrainingID",
                table: "Tag");

            migrationBuilder.RenameColumn(
                name: "ForumPostID",
                table: "ForumPost",
                newName: "ParentPostID");

            migrationBuilder.RenameIndex(
                name: "IX_ForumPost_ForumPostID",
                table: "ForumPost",
                newName: "IX_ForumPost_ParentPostID");

            migrationBuilder.CreateTable(
                name: "PostTag",
                columns: table => new
                {
                    PostID = table.Column<int>(type: "integer", nullable: false),
                    TagID = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PostTag", x => new { x.PostID, x.TagID });
                    table.ForeignKey(
                        name: "FK_PostTag_ForumPost_PostID",
                        column: x => x.PostID,
                        principalTable: "ForumPost",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_PostTag_Tag_TagID",
                        column: x => x.TagID,
                        principalTable: "Tag",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "TrainingProfile",
                columns: table => new
                {
                    ProfileID = table.Column<int>(type: "integer", nullable: false),
                    TrainingID = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TrainingProfile", x => new { x.ProfileID, x.TrainingID });
                    table.ForeignKey(
                        name: "FK_TrainingProfile_Profile_ProfileID",
                        column: x => x.ProfileID,
                        principalTable: "Profile",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_TrainingProfile_Training_TrainingID",
                        column: x => x.TrainingID,
                        principalTable: "Training",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "TrainingTag",
                columns: table => new
                {
                    TagID = table.Column<int>(type: "integer", nullable: false),
                    TrainingID = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TrainingTag", x => new { x.TagID, x.TrainingID });
                    table.ForeignKey(
                        name: "FK_TrainingTag_Tag_TagID",
                        column: x => x.TagID,
                        principalTable: "Tag",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_TrainingTag_Training_TrainingID",
                        column: x => x.TrainingID,
                        principalTable: "Training",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_PostTag_TagID",
                table: "PostTag",
                column: "TagID");

            migrationBuilder.CreateIndex(
                name: "IX_TrainingProfile_TrainingID",
                table: "TrainingProfile",
                column: "TrainingID");

            migrationBuilder.CreateIndex(
                name: "IX_TrainingTag_TrainingID",
                table: "TrainingTag",
                column: "TrainingID");

            migrationBuilder.AddForeignKey(
                name: "FK_ForumPost_ForumPost_ParentPostID",
                table: "ForumPost",
                column: "ParentPostID",
                principalTable: "ForumPost",
                principalColumn: "ID");
        }
    }
}
