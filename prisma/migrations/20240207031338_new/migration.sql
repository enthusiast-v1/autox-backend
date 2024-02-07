/*
  Warnings:

  - You are about to drop the column `driverId` on the `bookings` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "bookings" DROP CONSTRAINT "bookings_driverId_fkey";

-- AlterTable
ALTER TABLE "bookings" DROP COLUMN "driverId";
