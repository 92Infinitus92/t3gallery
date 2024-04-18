"use client";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { UploadButton } from "../../utils/uploadthing";
import { useRouter } from "next/navigation";

export default function TopNav() {
  const router = useRouter();
  return (
    <nav className="flex items-center justify-between w-full p-4 text-xl font-semibold border-b h-fit">
      <div>Gallerium</div>
      <div className="flex flex-row">
        <SignedOut>
          <SignInButton></SignInButton>
        </SignedOut>
        <SignedIn>
          <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={() => router.refresh()}
          />
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
