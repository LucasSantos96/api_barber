-- AlterTable
ALTER TABLE `clients` ADD COLUMN `status` BOOLEAN NULL,
    ADD COLUMN `subscriptionEnd` DATETIME(3) NULL;
