/*
  Warnings:

  - You are about to drop the `mentor` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `mentor`;

-- CreateTable
CREATE TABLE `Profile` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `firstname` VARCHAR(40) NULL,
    `lastname` VARCHAR(40) NULL,
    `imageUrl` VARCHAR(255) NULL,
    `title` VARCHAR(100) NULL,
    `summary` VARCHAR(255) NULL,
    `website` VARCHAR(45) NULL,
    `country` VARCHAR(50) NULL,
    `city` VARCHAR(50) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Profile_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
