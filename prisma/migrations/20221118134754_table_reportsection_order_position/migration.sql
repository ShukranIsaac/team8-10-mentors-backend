/*
  Warnings:

  - Added the required column `order` to the `ReportSection` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reportId` to the `ReportSection` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `reportsection` ADD COLUMN `order` INTEGER NOT NULL,
    ADD COLUMN `reportId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `ReportSection` ADD CONSTRAINT `ReportSection_reportId_fkey` FOREIGN KEY (`reportId`) REFERENCES `Report`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
