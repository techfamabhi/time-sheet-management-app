import { NextResponse } from "next/server";

import { timesheets } from "@/lib/db";

export async function GET() {
  return NextResponse.json({
    success: true,
    data: timesheets,
  });
}