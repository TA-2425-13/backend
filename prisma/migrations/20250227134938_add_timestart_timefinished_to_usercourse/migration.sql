-- AlterTable
ALTER TABLE `user_courses` ADD COLUMN `timeFinished` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `timeStarted` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
