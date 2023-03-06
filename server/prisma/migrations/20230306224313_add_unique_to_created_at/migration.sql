/*
  Warnings:

  - A unique constraint covering the columns `[createdAt]` on the table `Game` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Game_createdAt_key" ON "Game"("createdAt");
