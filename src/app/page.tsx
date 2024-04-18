import Link from "next/link";
import { db } from "../server/db";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getMyImages } from "../server/db/queries";
import Image from "next/image";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const Images = async () => {
    const images = await getMyImages();
    return (
      <div className="flex flex-wrap justify-center gap-4">
        {images.map((image) => (
          <div key={image.id} className="flex flex-col w-48 h-40">
            <Link href={`/image/${image.id}`}>
              <Image
                src={image.url}
                style={{ objectFit: "contain" }}
                width={192}
                height={160}
                alt="image"
              />
            </Link>
            <div>{image.name.substring(0, 20)}</div>
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
