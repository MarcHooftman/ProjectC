using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ProjectC.Migrations
{
    /// <inheritdoc />
    public partial class Admin5 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Tag_Training_TrainingID",
                table: "Tag");

            migrationBuilder.AddForeignKey(
                name: "FK_Tag_Training_TrainingID",
                table: "Tag",
                column: "TrainingID",
                principalTable: "Training",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Tag_Training_TrainingID",
                table: "Tag");

            migrationBuilder.AddForeignKey(
                name: "FK_Tag_Training_TrainingID",
                table: "Tag",
                column: "TrainingID",
                principalTable: "Training",
                principalColumn: "ID");
        }
    }
}
