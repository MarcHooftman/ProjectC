using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ProjectC.Migrations
{
    /// <inheritdoc />
    public partial class m5 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ForumTag_ForumPost_ForumPostID",
                table: "ForumTag");

            migrationBuilder.DropColumn(
                name: "ForumId",
                table: "ForumTag");

            migrationBuilder.RenameColumn(
                name: "ForumPostID",
                table: "ForumTag",
                newName: "ForumPostId");

            migrationBuilder.AddForeignKey(
                name: "FK_ForumTag_ForumPost_ForumPostId",
                table: "ForumTag",
                column: "ForumPostId",
                principalTable: "ForumPost",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ForumTag_ForumPost_ForumPostId",
                table: "ForumTag");

            migrationBuilder.RenameColumn(
                name: "ForumPostId",
                table: "ForumTag",
                newName: "ForumPostID");

            migrationBuilder.AddColumn<int>(
                name: "ForumId",
                table: "ForumTag",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddForeignKey(
                name: "FK_ForumTag_ForumPost_ForumPostID",
                table: "ForumTag",
                column: "ForumPostID",
                principalTable: "ForumPost",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
