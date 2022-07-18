-- CreateEnum
CREATE TYPE "DocumentsType" AS ENUM ('NATIONAL_ID', 'DRIVING_LICENSE');

-- CreateTable
CREATE TABLE "Documents" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "fullname" TEXT NOT NULL,
    "dateEmitted" TIMESTAMP(3) NOT NULL,
    "dateExpires" TIMESTAMP(3) NOT NULL,
    "numberRef" TEXT NOT NULL,
    "institution" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Documents_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Documents" ADD CONSTRAINT "Documents_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
