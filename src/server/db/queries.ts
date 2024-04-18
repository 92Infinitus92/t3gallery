import "server-only";
import { db } from ".";
import { auth } from "@clerk/nextjs/server";

export async function getMyImages() {
  const user = auth();
  if (!user.userId) throw new Error("Unauthorized");

  const images = await db.query.images.findMany({
    where: (image, { eq }) => eq(image.userId, user.userId),
    orderBy: (image, { desc }) => desc(image.id),
  });
  return images;
}
