using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ProjectC.Migrations
{
    /// <inheritdoc />
    public partial class m2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Training_Profile_ProfileID",
                table: "Training");

            migrationBuilder.DropIndex(
                name: "IX_Training_ProfileID",
                table: "Training");

            migrationBuilder.DropColumn(
                name: "ProfileID",
                table: "Training");

            migrationBuilder.CreateTable(
                name: "TrainingProfile",
                columns: table => new
                {
                    TrainingsWatchedID = table.Column<int>(type: "integer", nullable: false),
                    WatchedbyID = table.Column<int>(type: "integer", nullable: false),
                    TrainingID = table.Column<int>(type: "integer", nullable: true),
                    ProfileID = table.Column<int>(type: "integer", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TrainingProfile", x => new { x.TrainingsWatchedID, x.WatchedbyID });
                    table.ForeignKey(
                        name: "FK_TrainingProfile_Profile_ProfileID",
                        column: x => x.ProfileID,
                        principalTable: "Profile",
                        principalColumn: "ID");
                    table.ForeignKey(
                        name: "FK_TrainingProfile_Profile_WatchedbyID",
                        column: x => x.WatchedbyID,
                        principalTable: "Profile",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_TrainingProfile_Training_TrainingID",
                        column: x => x.TrainingID,
                        principalTable: "Training",
                        principalColumn: "ID");
                    table.ForeignKey(
                        name: "FK_TrainingProfile_Training_TrainingsWatchedID",
                        column: x => x.TrainingsWatchedID,
                        principalTable: "Training",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_TrainingProfile_ProfileID",
                table: "TrainingProfile",
                column: "ProfileID");

            migrationBuilder.CreateIndex(
                name: "IX_TrainingProfile_TrainingID",
                table: "TrainingProfile",
                column: "TrainingID");

            migrationBuilder.CreateIndex(
                name: "IX_TrainingProfile_WatchedbyID",
                table: "TrainingProfile",
                column: "WatchedbyID");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "TrainingProfile");

            migrationBuilder.AddColumn<int>(
                name: "ProfileID",
                table: "Training",
                type: "integer",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Training_ProfileID",
                table: "Training",
                column: "ProfileID");

            migrationBuilder.AddForeignKey(
                name: "FK_Training_Profile_ProfileID",
                table: "Training",
                column: "ProfileID",
                principalTable: "Profile",
                principalColumn: "ID");
        }
    }
}
