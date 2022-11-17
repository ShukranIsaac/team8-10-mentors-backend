/*
  Warnings:

  - You are about to drop the column `userid` on the `user` table. All the data in the column will be lost.
  - You are about to drop the `inbox_members` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[uid]` on the table `inbox` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `uid` to the `inbox` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `inbox_members` DROP FOREIGN KEY `inbox_members_userid_fkey`;

-- DropIndex
DROP INDEX `User_userid_key` ON `user`;

-- AlterTable
ALTER TABLE `inbox` ADD COLUMN `uid` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `userid`;

-- DropTable
DROP TABLE `inbox_members`;

-- CreateTable
CREATE TABLE `Chat` (
    `chatid` INTEGER NOT NULL,
    `messageid` INTEGER NOT NULL AUTO_INCREMENT,
    `message` TEXT NOT NULL,

    PRIMARY KEY (`messageid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `message` (
    `messageid` INTEGER NOT NULL AUTO_INCREMENT,
    `body` VARCHAR(1000) NOT NULL,
    `sent_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`messageid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_UserFollows` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_UserFollows_AB_unique`(`A`, `B`),
    INDEX `_UserFollows_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ChatFollows` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_ChatFollows_AB_unique`(`A`, `B`),
    INDEX `_ChatFollows_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `inbox_uid_key` ON `inbox`(`uid`);

-- AddForeignKey
ALTER TABLE `inbox` ADD CONSTRAINT `inbox_uid_fkey` FOREIGN KEY (`uid`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_UserFollows` ADD CONSTRAINT `_UserFollows_A_fkey` FOREIGN KEY (`A`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_UserFollows` ADD CONSTRAINT `_UserFollows_B_fkey` FOREIGN KEY (`B`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ChatFollows` ADD CONSTRAINT `_ChatFollows_A_fkey` FOREIGN KEY (`A`) REFERENCES `Chat`(`messageid`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ChatFollows` ADD CONSTRAINT `_ChatFollows_B_fkey` FOREIGN KEY (`B`) REFERENCES `Chat`(`messageid`) ON DELETE CASCADE ON UPDATE CASCADE;
