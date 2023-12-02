using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ProjectC.Migrations
{
    /// <inheritdoc />
    public partial class m3 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_TrainingProfile_Profile_ProfileID",
                table: "TrainingProfile");

            migrationBuilder.DropForeignKey(
                name: "FK_TrainingProfile_Profile_WatchedbyID",
                table: "TrainingProfile");

            migrationBuilder.DropForeignKey(
                name: "FK_TrainingProfile_Training_TrainingID",
                table: "TrainingProfile");

            migrationBuilder.DropForeignKey(
                name: "FK_TrainingProfile_Training_TrainingsWatchedID",
                table: "TrainingProfile");

            migrationBuilder.DropPrimaryKey(
                name: "PK_TrainingProfile",
                table: "TrainingProfile");

            migrationBuilder.DropIndex(
                name: "IX_TrainingProfile_ProfileID",
                table: "TrainingProfile");

            migrationBuilder.DropIndex(
                name: "IX_TrainingProfile_WatchedbyID",
                table: "TrainingProfile");

            migrationBuilder.DropColumn(
                name: "TrainingsWatchedID",
                table: "TrainingProfile");

            migrationBuilder.DropColumn(
                name: "WatchedbyID",
                table: "TrainingProfile");

            migrationBuilder.AlterColumn<int>(
                name: "TrainingID",
                table: "TrainingProfile",
                type: "integer",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "integer",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "ProfileID",
                table: "TrainingProfile",
                type: "integer",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "integer",
                oldNullable: true);

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

            migrationBuilder.AddPrimaryKey(
                name: "PK_TrainingProfile",
                table: "TrainingProfile",
                columns: new[] { "ProfileID", "TrainingID" });

            migrationBuilder.CreateIndex(
                name: "IX_TrainingProfile_ProfileID1",
                table: "TrainingProfile",
                column: "ProfileID1");

            migrationBuilder.CreateIndex(
                name: "IX_TrainingProfile_TrainingID1",
                table: "TrainingProfile",
                column: "TrainingID1");

            migrationBuilder.AddForeignKey(
                name: "FK_TrainingProfile_Profile_ProfileID",
                table: "TrainingProfile",
                column: "ProfileID",
                principalTable: "Profile",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_TrainingProfile_Profile_ProfileID1",
                table: "TrainingProfile",
                column: "ProfileID1",
                principalTable: "Profile",
                principalColumn: "ID");

            migrationBuilder.AddForeignKey(
                name: "FK_TrainingProfile_Training_TrainingID",
                table: "TrainingProfile",
                column: "TrainingID",
                principalTable: "Training",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_TrainingProfile_Training_TrainingID1",
                table: "TrainingProfile",
                column: "TrainingID1",
                principalTable: "Training",
                principalColumn: "ID");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_TrainingProfile_Profile_ProfileID",
                table: "TrainingProfile");

            migrationBuilder.DropForeignKey(
                name: "FK_TrainingProfile_Profile_ProfileID1",
                table: "TrainingProfile");

            migrationBuilder.DropForeignKey(
                name: "FK_TrainingProfile_Training_TrainingID",
                table: "TrainingProfile");

            migrationBuilder.DropForeignKey(
                name: "FK_TrainingProfile_Training_TrainingID1",
                table: "TrainingProfile");

            migrationBuilder.DropPrimaryKey(
                name: "PK_TrainingProfile",
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

            migrationBuilder.AlterColumn<int>(
                name: "TrainingID",
                table: "TrainingProfile",
                type: "integer",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "integer");

            migrationBuilder.AlterColumn<int>(
                name: "ProfileID",
                table: "TrainingProfile",
                type: "integer",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "integer");

            migrationBuilder.AddColumn<int>(
                name: "TrainingsWatchedID",
                table: "TrainingProfile",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "WatchedbyID",
                table: "TrainingProfile",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddPrimaryKey(
                name: "PK_TrainingProfile",
                table: "TrainingProfile",
                columns: new[] { "TrainingsWatchedID", "WatchedbyID" });

            migrationBuilder.CreateIndex(
                name: "IX_TrainingProfile_ProfileID",
                table: "TrainingProfile",
                column: "ProfileID");

            migrationBuilder.CreateIndex(
                name: "IX_TrainingProfile_WatchedbyID",
                table: "TrainingProfile",
                column: "WatchedbyID");

            migrationBuilder.AddForeignKey(
                name: "FK_TrainingProfile_Profile_ProfileID",
                table: "TrainingProfile",
                column: "ProfileID",
                principalTable: "Profile",
                principalColumn: "ID");

            migrationBuilder.AddForeignKey(
                name: "FK_TrainingProfile_Profile_WatchedbyID",
                table: "TrainingProfile",
                column: "WatchedbyID",
                principalTable: "Profile",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_TrainingProfile_Training_TrainingID",
                table: "TrainingProfile",
                column: "TrainingID",
                principalTable: "Training",
                principalColumn: "ID");

            migrationBuilder.AddForeignKey(
                name: "FK_TrainingProfile_Training_TrainingsWatchedID",
                table: "TrainingProfile",
                column: "TrainingsWatchedID",
                principalTable: "Training",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
