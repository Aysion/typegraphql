/*
  Warnings:

  - Added the required column `tenantId` to the `PropertyCategory` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_PropertyCategory" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tenantId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    CONSTRAINT "PropertyCategory_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_PropertyCategory" ("id", "name") SELECT "id", "name" FROM "PropertyCategory";
DROP TABLE "PropertyCategory";
ALTER TABLE "new_PropertyCategory" RENAME TO "PropertyCategory";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
