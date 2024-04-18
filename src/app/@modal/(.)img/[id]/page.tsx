import { getImage } from "../../../../server/db/queries";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idOfImage = parseInt(photoId);
  const image = await getImage(idOfImage);
  return (
    <div>
      <img src={image.url} alt={image.name} className="w-96 " />
    </div>
  );
}
