-- AlterTable
ALTER TABLE "FoundItem" ADD COLUMN     "email" TEXT,
ADD COLUMN     "phoneNumber" INTEGER;

-- AlterTable
ALTER TABLE "LostItems" ADD COLUMN     "email" TEXT,
ADD COLUMN     "phoneNumber" INTEGER;
