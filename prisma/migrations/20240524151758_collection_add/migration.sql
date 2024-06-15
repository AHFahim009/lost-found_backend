-- AlterTable
ALTER TABLE "FoundItem" ADD COLUMN     "photo" TEXT;

-- CreateTable
CREATE TABLE "LostItems" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "category" TEXT NOT NULL DEFAULT 'Mobile',
    "lostItemName" TEXT NOT NULL,
    "photo" TEXT,
    "description" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "lostDate" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LostItems_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "LostItems" ADD CONSTRAINT "LostItems_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
