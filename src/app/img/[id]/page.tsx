import FullPageImageView from "../../components/full-image-page";

export default async function PhotoPage({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idOfImage = Number(photoId);
  if (Number.isNaN(idOfImage)) throw new Error("Invalid ID");

  return (
    <div className="flex h-full min-h-0 w-full min-w-0 overflow-y-hidden">
      <FullPageImageView id={idOfImage} />
    </div>
  );
}
