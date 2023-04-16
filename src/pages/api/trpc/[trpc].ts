import { createNextApiHandler } from "@trpc/server/adapters/next";

import { env } from "~/env.mjs";
import { createTRPCContext } from "~/server/api/trpc";
import { appRouter } from "~/server/api/root";
import { NextRequest, NextResponse } from "next/server";
import { getAuth } from "@clerk/nextjs/server";

export default function handler(req: NextRequest, res: any) {
  const user = getAuth(req);
  console.log("blah hi user", user);
  res.status(200).json({ name: "John Doe" });
}