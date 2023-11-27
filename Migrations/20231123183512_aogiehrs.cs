using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace probeersel.Migrations
{
    /// <inheritdoc />
    public partial class aogiehrs : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Profile_Media_ProfilePictureID",
                table: "Profile");

            migrationBuilder.AlterColumn<int>(
                name: "ProfilePictureID",
                table: "Profile",
                type: "integer",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "integer");

            migrationBuilder.AddForeignKey(
                name: "FK_Profile_Media_ProfilePictureID",
                table: "Profile",
                column: "ProfilePictureID",
                principalTable: "Media",
                principalColumn: "ID");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Profile_Media_ProfilePictureID",
                table: "Profile");

            migrationBuilder.AlterColumn<int>(
                name: "ProfilePictureID",
                table: "Profile",
                type: "integer",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "integer",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Profile_Media_ProfilePictureID",
                table: "Profile",
                column: "ProfilePictureID",
                principalTable: "Media",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
