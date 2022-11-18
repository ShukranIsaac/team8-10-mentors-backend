/*
  Warnings:

  - Added the required column `userId` to the `Report` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Role_userId_fkey` ON `role`;

-- AlterTable
ALTER TABLE `report` ADD COLUMN `endAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `name` VARCHAR(255) NULL,
    ADD COLUMN `startAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `userId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `ReportSection` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NULL,
    `description` VARCHAR(500) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Report` ADD CONSTRAINT `Report_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
