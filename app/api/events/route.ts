import { NextResponse } from "next/server";
import { isSiteEvent } from "@/lib/config";
import { storeSiteEvent } from "@/lib/db";

export async function POST(request: Request) {
  let eventName = "";
  try {
    const body: unknown = await request.json();
    if (body && typeof body === "object" && "event" in body && typeof body.event === "string") {
      eventName = body.event;
    }
  } catch {
    return new NextResponse(null, { status: 400 });
  }

  if (!isSiteEvent(eventName)) {
    return new NextResponse(null, { status: 400 });
  }

  try {
    await storeSiteEvent(eventName);
  } catch {
    console.error("Anonymous site event was not stored.");
  }

  return new NextResponse(null, { status: 204 });
}
