using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace probeersel.Migrations
{
    /// <inheritdoc />
    public partial class baruibgvosurbog2380280Aaefsgrersgsdffasfafasf : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Like_ForumPost_ForumPostID",
                table: "Like");

            migrationBuilder.DropColumn(
                name: "PostID",
                table: "Like");

            migrationBuilder.AlterColumn<int>(
                name: "ForumPostID",
                table: "Like",
                type: "integer",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "integer",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Like_ForumPost_ForumPostID",
                table: "Like",
                column: "ForumPostID",
                principalTable: "ForumPost",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Like_ForumPost_ForumPostID",
                table: "Like");

            migrationBuilder.AlterColumn<int>(
                name: "ForumPostID",
                table: "Like",
                type: "integer",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "integer");

            migrationBuilder.AddColumn<int>(
                name: "PostID",
                table: "Like",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddForeignKey(
                name: "FK_Like_ForumPost_ForumPostID",
                table: "Like",
                column: "ForumPostID",
                principalTable: "ForumPost",
                principalColumn: "ID");
        }
    }
}
