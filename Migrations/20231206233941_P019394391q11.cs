using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ProjectC.Migrations
{
    /// <inheritdoc />
    public partial class P019394391q11 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Tag_ForumPost_ForumPostID",
                table: "Tag");

            migrationBuilder.AlterColumn<int>(
                name: "ForumPostID",
                table: "Tag",
                type: "integer",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "integer",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Tag_ForumPost_ForumPostID",
                table: "Tag",
                column: "ForumPostID",
                principalTable: "ForumPost",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Tag_ForumPost_ForumPostID",
                table: "Tag");

            migrationBuilder.AlterColumn<int>(
                name: "ForumPostID",
                table: "Tag",
                type: "integer",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "integer");

            migrationBuilder.AddForeignKey(
                name: "FK_Tag_ForumPost_ForumPostID",
                table: "Tag",
                column: "ForumPostID",
                principalTable: "ForumPost",
                principalColumn: "ID");
        }
    }
}
