using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace probeersel.Migrations
{
    /// <inheritdoc />
    public partial class baruibgvosurbog2380280Aaefsgrersgsdffasfaf : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Like_ForumPost_PostID",
                table: "Like");

            migrationBuilder.DropForeignKey(
                name: "FK_Like_Profile_ProfileID",
                table: "Like");

            migrationBuilder.DropIndex(
                name: "IX_Like_PostID",
                table: "Like");

            migrationBuilder.DropIndex(
                name: "IX_Like_ProfileID",
                table: "Like");

            migrationBuilder.AddColumn<int>(
                name: "ForumPostID",
                table: "Like",
                type: "integer",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Like_ForumPostID",
                table: "Like",
                column: "ForumPostID");

            migrationBuilder.AddForeignKey(
                name: "FK_Like_ForumPost_ForumPostID",
                table: "Like",
                column: "ForumPostID",
                principalTable: "ForumPost",
                principalColumn: "ID");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Like_ForumPost_ForumPostID",
                table: "Like");

            migrationBuilder.DropIndex(
                name: "IX_Like_ForumPostID",
                table: "Like");

            migrationBuilder.DropColumn(
                name: "ForumPostID",
                table: "Like");

            migrationBuilder.CreateIndex(
                name: "IX_Like_PostID",
                table: "Like",
                column: "PostID");

            migrationBuilder.CreateIndex(
                name: "IX_Like_ProfileID",
                table: "Like",
                column: "ProfileID");

            migrationBuilder.AddForeignKey(
                name: "FK_Like_ForumPost_PostID",
                table: "Like",
                column: "PostID",
                principalTable: "ForumPost",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Like_Profile_ProfileID",
                table: "Like",
                column: "ProfileID",
                principalTable: "Profile",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
