/*
  Warnings:

  - Added the required column `value` to the `Products` table without a default value. This is not possible if the table is not empty.
  - Made the column `companyId` on table `Products` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Products" DROP CONSTRAINT "Products_companyId_fkey";

-- AlterTable
ALTER TABLE "Products" ADD COLUMN     "value" DOUBLE PRECISION NOT NULL,
ALTER COLUMN "companyId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
