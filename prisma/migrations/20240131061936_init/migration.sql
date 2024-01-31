-- CreateEnum
CREATE TYPE "ERole" AS ENUM ('CUSTOMER', 'DRIVER', 'ADMIN', 'SUPER_ADMIN');

-- CreateEnum
CREATE TYPE "EGender" AS ENUM ('Male', 'Female', 'Others');

-- CreateEnum
CREATE TYPE "EDriverStatus" AS ENUM ('Available', 'In_A_Trip', 'Accident', 'On_Vacation');

-- CreateEnum
CREATE TYPE "ERentType" AS ENUM ('Hourly', 'Daily', 'Weekly', 'Monthly', 'Yearly');

-- CreateEnum
CREATE TYPE "EFuelType" AS ENUM ('LPG', 'CNG', 'Petrol', 'Diesel', 'Gasoline', 'Kerosene');

-- CreateEnum
CREATE TYPE "EVehicleType" AS ENUM ('S', 'M', 'L', 'XL', 'XXL', 'XXXL');

-- CreateEnum
CREATE TYPE "EVehicleStatus" AS ENUM ('Available', 'In_A_Trip', 'Accident', 'Maintenance');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "ERole" NOT NULL DEFAULT 'CUSTOMER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "drivers" (
    "id" TEXT NOT NULL,
    "licenseNo" TEXT NOT NULL,
    "licenseExpire" TIMESTAMP(3) NOT NULL,
    "nidNo" TEXT NOT NULL,
    "status" "EDriverStatus" NOT NULL DEFAULT 'Available',
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "drivers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "profiles" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "gender" "EGender" NOT NULL,
    "dateOfBirth" TIMESTAMP(3),
    "address" TEXT,
    "image" TEXT,
    "contactNo" TEXT NOT NULL,
    "emergContact" TEXT,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "profiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vehicle_brands" (
    "id" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "vehicle_brands_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vehicles" (
    "id" TEXT NOT NULL,
    "vehicleId" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "mileage" DOUBLE PRECISION NOT NULL,
    "color" TEXT NOT NULL,
    "images" TEXT[],
    "overview" VARCHAR NOT NULL,
    "basePrice" INTEGER NOT NULL,
    "fuelType" "EFuelType" NOT NULL,
    "passengerCapacity" INTEGER NOT NULL,
    "location" TEXT NOT NULL,
    "plateNo" TEXT NOT NULL,
    "chassisNo" TEXT NOT NULL,
    "status" "EVehicleStatus" NOT NULL DEFAULT 'Available',
    "owner" TEXT,
    "vehicleType" "EVehicleType" NOT NULL,
    "driverId" TEXT NOT NULL,
    "brandId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "vehicles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rent_types" (
    "id" TEXT NOT NULL,
    "type" "ERentType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "rent_types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bookings" (
    "id" TEXT NOT NULL,
    "pickUpDate" TIMESTAMP(3) NOT NULL,
    "dropOffDate" TIMESTAMP(3) NOT NULL,
    "pickUpTime" TIMESTAMP(3) NOT NULL,
    "dropOffTime" TIMESTAMP(3) NOT NULL,
    "pickUpLocation" TEXT NOT NULL,
    "dropOffLocation" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "vehicleId" TEXT NOT NULL,
    "promoId" TEXT,
    "rentTypeId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "bookings_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "drivers_userId_key" ON "drivers"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "profiles_userId_key" ON "profiles"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "vehicles_driverId_key" ON "vehicles"("driverId");

-- CreateIndex
CREATE UNIQUE INDEX "bookings_rentTypeId_key" ON "bookings"("rentTypeId");

-- AddForeignKey
ALTER TABLE "drivers" ADD CONSTRAINT "drivers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vehicles" ADD CONSTRAINT "vehicles_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "drivers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vehicles" ADD CONSTRAINT "vehicles_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "vehicle_brands"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bookings" ADD CONSTRAINT "bookings_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bookings" ADD CONSTRAINT "bookings_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "vehicles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bookings" ADD CONSTRAINT "bookings_rentTypeId_fkey" FOREIGN KEY ("rentTypeId") REFERENCES "rent_types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
