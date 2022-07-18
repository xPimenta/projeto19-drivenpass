/*
  Warnings:

  - Added the required column `type` to the `Documents` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "DocumentType" AS ENUM ('NATIONAL_ID', 'DRIVING_LICENSE');

-- AlterTable
ALTER TABLE "Cards" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Documents" ADD COLUMN     "type" "DocumentType" NOT NULL;

-- DropEnum
DROP TYPE "DocumentsType";
