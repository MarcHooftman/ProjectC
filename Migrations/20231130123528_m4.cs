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
                name: "FK_TrainingProfile_Profile_ProfileID1",
                table: "TrainingProfile");

            migrationBuilder.DropForeignKey(
                name: "FK_TrainingProfile_Training_TrainingID1",
                table: "TrainingProfile");

            migrationBuilder.DropIndex(
                name: "IX_TrainingProfile_ProfileID1",
                table: "TrainingProfile");

            migrationBuilder.DropIndex(
                name: "IX_TrainingProfile_TrainingID1",
                table: "TrainingProfile");

            migrationBuilder.DropColumn(
                name: "ProfileID1",
                table: "TrainingProfile");

            migrationBuilder.DropColumn(
                name: "TrainingID1",
                table: "TrainingProfile");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ProfileID1",
                table: "TrainingProfile",
                type: "integer",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "TrainingID1",
                table: "TrainingProfile",
                type: "integer",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_TrainingProfile_ProfileID1",
                table: "TrainingProfile",
                column: "ProfileID1");

            migrationBuilder.CreateIndex(
                name: "IX_TrainingProfile_TrainingID1",
                table: "TrainingProfile",
                column: "TrainingID1");

            migrationBuilder.AddForeignKey(
                name: "FK_TrainingProfile_Profile_ProfileID1",
                table: "TrainingProfile",
                column: "ProfileID1",
                principalTable: "Profile",
                principalColumn: "ID");

            migrationBuilder.AddForeignKey(
                name: "FK_TrainingProfile_Training_TrainingID1",
                table: "TrainingProfile",
                column: "TrainingID1",
                principalTable: "Training",
                principalColumn: "ID");
        }
    }
}
