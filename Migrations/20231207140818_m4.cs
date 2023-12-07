using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ProjectC.Migrations
{
    /// <inheritdoc />
    public partial class m4 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Tag_ForumPost_ForumPostID",
                table: "Tag");

            migrationBuilder.DropForeignKey(
                name: "FK_Tag_Training_TrainingID",
                table: "Tag");

            migrationBuilder.DropIndex(
                name: "IX_Tag_ForumPostID",
                table: "Tag");

            migrationBuilder.DropIndex(
                name: "IX_Tag_TrainingID",
                table: "Tag");

            migrationBuilder.DropColumn(
                name: "ForumPostID",
                table: "Tag");

            migrationBuilder.DropColumn(
                name: "TrainingID",
                table: "Tag");

            migrationBuilder.CreateTable(
                name: "ForumTag",
                columns: table => new
                {
                    TagId = table.Column<int>(type: "integer", nullable: false),
                    ForumPostID = table.Column<int>(type: "integer", nullable: false),
                    ForumId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ForumTag", x => new { x.ForumPostID, x.TagId });
                    table.ForeignKey(
                        name: "FK_ForumTag_ForumPost_ForumPostID",
                        column: x => x.ForumPostID,
                        principalTable: "ForumPost",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ForumTag_Tag_TagId",
                        column: x => x.TagId,
                        principalTable: "Tag",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "TrainingTag",
                columns: table => new
                {
                    TrainingID = table.Column<int>(type: "integer", nullable: false),
                    TagID = table.Column<int>(type: "integer", nullable: false)
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
                name: "IX_ForumTag_TagId",
                table: "ForumTag",
                column: "TagId");

            migrationBuilder.CreateIndex(
                name: "IX_TrainingTag_TrainingID",
                table: "TrainingTag",
                column: "TrainingID");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ForumTag");

            migrationBuilder.DropTable(
                name: "TrainingTag");

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
                name: "IX_Tag_ForumPostID",
                table: "Tag",
                column: "ForumPostID");

            migrationBuilder.CreateIndex(
                name: "IX_Tag_TrainingID",
                table: "Tag",
                column: "TrainingID");

            migrationBuilder.AddForeignKey(
                name: "FK_Tag_ForumPost_ForumPostID",
                table: "Tag",
                column: "ForumPostID",
                principalTable: "ForumPost",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Tag_Training_TrainingID",
                table: "Tag",
                column: "TrainingID",
                principalTable: "Training",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
