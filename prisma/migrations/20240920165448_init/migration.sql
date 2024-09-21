-- CreateTable
CREATE TABLE "Post" (
    "slug" TEXT NOT NULL,
    "views" INTEGER NOT NULL DEFAULT 0
);

-- CreateIndex
CREATE UNIQUE INDEX "Post_slug_key" ON "Post"("slug");
