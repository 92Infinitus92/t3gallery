import Link from "next/link";
import { db } from "../server/db";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const Images = async () => {
    const images = await db.query.images.findMany({
      orderBy: (model, { desc }) => desc(model.id),
    });
    return (
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
    );
  };

  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-2xl text-center">
          Please sign in to see images
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
