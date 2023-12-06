using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ProjectC.Migrations
{
    /// <inheritdoc />
    public partial class P019394391q1 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ForumPost_ForumPost_ForumPostID",
                table: "ForumPost");

            migrationBuilder.AddForeignKey(
                name: "FK_ForumPost_ForumPost_ForumPostID",
                table: "ForumPost",
                column: "ForumPostID",
                principalTable: "ForumPost",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ForumPost_ForumPost_ForumPostID",
                table: "ForumPost");

            migrationBuilder.AddForeignKey(
                name: "FK_ForumPost_ForumPost_ForumPostID",
                table: "ForumPost",
                column: "ForumPostID",
                principalTable: "ForumPost",
                principalColumn: "ID");
        }
    }
}
