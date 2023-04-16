import "./globals.css";

import React from "react";
import { ClerkProvider } from "@clerk/nextjs/app-beta";
import { TrpcProvider } from "~/components/TrpcProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="cupcake">
      <head>
        <title>Next.js 13 with Clerk</title>
      </head>
      <ClerkProvider>
        <TrpcProvider>
          <body>{children}</body>
        </TrpcProvider>
      </ClerkProvider>
    </html>
  );
}
