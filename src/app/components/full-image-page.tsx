import { clerkClient } from "@clerk/nextjs/server";
import { getImage } from "../../server/db/queries";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);

  const uploaderInfo = await clerkClient.users.getUser(image.userId);
  return (
    <div className="flex w-full h-full min-w-0">
      <div className="flex-shrink flex justify-center items-center">
        <img
          src={image.url}
          alt={image.name}
          className="flex-shrink object-contain"
        />
      </div>

      <div className="w-48 flex flex-col flex-shrink-0 border-l gap-2">
        <div className="text-center border-b text-lg p-2">{image.name}</div>
        <div className="flex flex-col px-2">
          <span>Uploaded by: {uploaderInfo.fullName}</span>
        </div>
      </div>
    </div>
  );
}
