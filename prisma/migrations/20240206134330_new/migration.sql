/*
  Warnings:

  - The values [Unavailable] on the enum `EDriverStatus` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `driverId` on the `bookings` table. All the data in the column will be lost.
  - You are about to drop the `rents` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "EDriverStatus_new" AS ENUM ('Available', 'In_A_Trip', 'Accident', 'On_Vacation');
ALTER TABLE "drivers" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "drivers" ALTER COLUMN "status" TYPE "EDriverStatus_new" USING ("status"::text::"EDriverStatus_new");
ALTER TYPE "EDriverStatus" RENAME TO "EDriverStatus_old";
ALTER TYPE "EDriverStatus_new" RENAME TO "EDriverStatus";
DROP TYPE "EDriverStatus_old";
ALTER TABLE "drivers" ALTER COLUMN "status" SET DEFAULT 'Available';
COMMIT;

-- DropForeignKey
ALTER TABLE "bookings" DROP CONSTRAINT "bookings_driverId_fkey";

-- DropForeignKey
ALTER TABLE "rents" DROP CONSTRAINT "rents_bookingId_fkey";

-- DropForeignKey
ALTER TABLE "rents" DROP CONSTRAINT "rents_driverId_fkey";

-- AlterTable
ALTER TABLE "bookings" DROP COLUMN "driverId";

-- DropTable
DROP TABLE "rents";
