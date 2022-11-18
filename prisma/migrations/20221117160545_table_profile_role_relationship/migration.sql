/*
  Warnings:

  - Added the required column `userId` to the `Role` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `role` ADD COLUMN `userId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Role` ADD CONSTRAINT `Role_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Profile`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
