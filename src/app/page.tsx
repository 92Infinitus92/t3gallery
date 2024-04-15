import Link from "next/link";

export default function HomePage() {
  const mockUrls = [
    "https://utfs.io/f/c7f2f4e6-e232-43cd-abb3-986c1638d810-v4kq2i.png",
    "https://utfs.io/f/0a6be0d2-4222-4de2-9e3e-2d4f2f613d72-28xrfr.jpg",
    "https://utfs.io/f/c1bb0b8b-eb18-4e96-8a47-c964c2224719-5farnx.png",
    "https://utfs.io/f/e4330ad0-c1a0-45fc-aeb0-94d03cd17c94-28xqp2.jpg",
  ];

  const mockImages = mockUrls.map((url, index) => ({
    id: index + 1,
    url,
  }));

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <Link href={`/image/${image.id}`}>
              <img src={image.url} alt={`Image ${image.id}`} />
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
