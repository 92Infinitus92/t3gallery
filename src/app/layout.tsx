import "~/styles/globals.css";
import "@uploadthing/react/styles.css";

import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";

import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import Link from "next/link";
import TopNav from "./_components/topnav";
import { ourFileRouter } from "./api/uploadthing/core";
import { extractRouterConfig } from "uploadthing/server";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "T3 Gallery",
  description: "Folow Up",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
        <body className={`font-sans ${inter.variable}`}>
          <div className="h-screen grid grid-rows-[auto, 1fr]">
            <TopNav />
            <main className="overflow-y-scroll no-scrollbar">{children}</main>
          </div>
          {modal}
          <div id="modal-root"></div>
        </body>
      </html>
    </ClerkProvider>
  );
}
