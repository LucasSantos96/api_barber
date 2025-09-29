/*
  Warnings:

  - You are about to drop the column `expires_at` on the `plans` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `plans` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `clients` ADD COLUMN `expires_at` DATETIME(3) NULL,
    ADD COLUMN `status` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `plans` DROP COLUMN `expires_at`,
    DROP COLUMN `status`;
