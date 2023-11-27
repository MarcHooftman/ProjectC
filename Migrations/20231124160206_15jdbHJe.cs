using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace probeersel.Migrations
{
    /// <inheritdoc />
    public partial class _15jdbHJe : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ForumPost_ForumPost_ParentPostID",
                table: "ForumPost");

            migrationBuilder.AlterColumn<int>(
                name: "ParentPostID",
                table: "ForumPost",
                type: "integer",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "integer");

            migrationBuilder.AddForeignKey(
                name: "FK_ForumPost_ForumPost_ParentPostID",
                table: "ForumPost",
                column: "ParentPostID",
                principalTable: "ForumPost",
                principalColumn: "ID");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ForumPost_ForumPost_ParentPostID",
                table: "ForumPost");

            migrationBuilder.AlterColumn<int>(
                name: "ParentPostID",
                table: "ForumPost",
                type: "integer",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "integer",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_ForumPost_ForumPost_ParentPostID",
                table: "ForumPost",
                column: "ParentPostID",
                principalTable: "ForumPost",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
