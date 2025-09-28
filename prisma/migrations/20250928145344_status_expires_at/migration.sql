/*
  Warnings:

  - You are about to drop the column `status` on the `clients` table. All the data in the column will be lost.
  - You are about to drop the column `subscriptionEnd` on the `clients` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `clients` DROP COLUMN `status`,
    DROP COLUMN `subscriptionEnd`;

-- AlterTable
ALTER TABLE `plans` ADD COLUMN `expires_at` DATETIME(3) NULL,
    ADD COLUMN `status` VARCHAR(191) NULL;
