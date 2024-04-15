import Link from "next/link";
import { db } from "../server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  console.log("images", images);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {images.map((image) => (
          <div key={image.id} className="w-48 flex flex-col">
            <Link href={`/image/${image.id}`}>
              <img src={image.url} alt={`Image ${image.id}`} />
            </Link>
            <div>{image.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
