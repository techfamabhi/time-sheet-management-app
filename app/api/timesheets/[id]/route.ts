import { NextRequest, NextResponse } from "next/server";

import { entriesData, timesheets } from "@/lib/db";

export async function GET(
  req: NextRequest,
  context: any
) {
  const params = await context.params;
  const id = Number(params.id);

  const sheet = timesheets.find(
    (item) => item.id === id
  );

  if (!sheet) {
    return NextResponse.json(
      {
        success: false,
        message: "Timesheet not found",
      },
      { status: 404 }
    );
  }

  return NextResponse.json({
    success: true,

    data: {
      timesheet: sheet,

      entries: entriesData[id] || [],
    },
  });
}