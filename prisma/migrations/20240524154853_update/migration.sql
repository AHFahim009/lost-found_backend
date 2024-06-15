/*
  Warnings:

  - You are about to drop the column `lostDate` on the `FoundItem` table. All the data in the column will be lost.
  - Added the required column `foundDate` to the `FoundItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "FoundItem" DROP COLUMN "lostDate",
ADD COLUMN     "foundDate" TIMESTAMP(3) NOT NULL;
