import FullPageImageView from "../../../components/full-image-page";
import { Modal } from "./modal";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idOfImage = Number(photoId);
  if (Number.isNaN(idOfImage)) throw new Error("Invalid ID");

  return (
    <Modal>
      <FullPageImageView id={idOfImage} />
    </Modal>
  );
}
