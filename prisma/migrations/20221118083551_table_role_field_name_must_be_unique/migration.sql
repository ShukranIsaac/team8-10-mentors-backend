/*
  Warnings:

  - Made the column `name` on table `role` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `role` MODIFY `name` VARCHAR(100) NOT NULL;
