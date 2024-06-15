/*
  Warnings:

  - You are about to drop the column `categoryId` on the `FoundItem` table. All the data in the column will be lost.
  - You are about to drop the `FoundItemCategory` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "FoundItem" DROP CONSTRAINT "FoundItem_categoryId_fkey";

-- AlterTable
ALTER TABLE "FoundItem" DROP COLUMN "categoryId",
ADD COLUMN     "category" TEXT NOT NULL DEFAULT 'Mobile',
ALTER COLUMN "lostDate" DROP DEFAULT;

-- DropTable
DROP TABLE "FoundItemCategory";
