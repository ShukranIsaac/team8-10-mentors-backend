/*
  Warnings:

  - You are about to alter the column `status` on the `report` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(1))` to `Enum(EnumId(0))`.

*/
-- AlterTable
ALTER TABLE `report` MODIFY `status` ENUM('PUBLIC', 'PRIVATE', 'PRIVATE_DRAFT', 'PUBLISHED', 'IN_REVIEW') NULL DEFAULT 'PRIVATE_DRAFT';
