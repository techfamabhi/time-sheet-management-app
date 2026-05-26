import { NextRequest, NextResponse } from "next/server";

import { entriesData, timesheets } from "@/lib/db";

import { calculateTotalHours, getStatus } from "@/lib/utils";

export async function POST(
  req: NextRequest
) {
  const body = await req.json();

  const {
    timesheetId,
    date,
    project,
    typeOfWork,
    description,
    hours,
  } = body;

  const newEntry = {
    id: Date.now(),

    date,

    title: description,

    project,

    typeOfWork,

    description,

    hours,
  };

  if (!entriesData[timesheetId]) {
    entriesData[timesheetId] = [];
  }

  const group = entriesData[
    timesheetId
  ].find((g) => g.date === date);

  if (group) {
    group.entries.push(newEntry);
  } else {
    entriesData[timesheetId].push({
      date,
      entries: [newEntry],
    });
  }

  /*
    Update total hours
  */

  const totalHours =
    calculateTotalHours(
      entriesData[timesheetId]
    );

  const sheet = timesheets.find(
    (item) => item.id === timesheetId
  );

  if (sheet) {
    sheet.totalHours =
      totalHours;

    sheet.status =
      getStatus(totalHours);
  }

  return NextResponse.json({
    success: true,
    data: newEntry,
  });
}