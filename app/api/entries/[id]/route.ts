import { NextRequest, NextResponse } from "next/server";

import { entriesData, timesheets } from "@/lib/db";
import { calculateTotalHours, getStatus } from "@/lib/utils";

export async function PUT(
  req: NextRequest,
  context: any
) {
  const params = await context.params;
  const entryId = Number(params.id);
  const body = await req.json();
  const { project, typeOfWork, description, hours } = body;

  let foundEntry: any = null;
  let foundTimesheetId: number | null = null;

  for (const [tsId, dailyTasks] of Object.entries(entriesData)) {
    for (const dailyTask of dailyTasks) {
      const entry = dailyTask.entries.find((e) => e.id === entryId);
      if (entry) {
        foundEntry = entry;
        foundTimesheetId = Number(tsId);
        break;
      }
    }
    if (foundEntry) break;
  }

  if (!foundEntry || foundTimesheetId === null) {
    return NextResponse.json(
      { success: false, message: "Entry not found" },
      { status: 404 }
    );
  }

  foundEntry.project = project;
  foundEntry.typeOfWork = typeOfWork;
  foundEntry.description = description;
  foundEntry.title = description;
  foundEntry.hours = Number(hours);

  // Recalculate total hours and update timesheet status
  const totalHours = calculateTotalHours(entriesData[foundTimesheetId]);
  const sheet = timesheets.find((item) => item.id === foundTimesheetId);
  if (sheet) {
    sheet.totalHours = totalHours;
    sheet.status = getStatus(totalHours);
  }

  return NextResponse.json({
    success: true,
    data: foundEntry,
  });
}

export async function DELETE(
  req: NextRequest,
  context: any
) {
  const params = await context.params;
  const entryId = Number(params.id);

  let deleted = false;
  let foundTimesheetId: number | null = null;

  for (const [tsId, dailyTasks] of Object.entries(entriesData)) {
    for (let i = 0; i < dailyTasks.length; i++) {
      const index = dailyTasks[i].entries.findIndex((e) => e.id === entryId);
      if (index !== -1) {
        dailyTasks[i].entries.splice(index, 1);
        foundTimesheetId = Number(tsId);
        deleted = true;

        if (dailyTasks[i].entries.length === 0) {
          dailyTasks.splice(i, 1);
        }
        break;
      }
    }
    if (deleted) break;
  }

  if (!deleted || foundTimesheetId === null) {
    return NextResponse.json(
      { success: false, message: "Entry not found" },
      { status: 404 }
    );
  }

  // Recalculate total hours and update timesheet status
  const totalHours = calculateTotalHours(entriesData[foundTimesheetId]);
  const sheet = timesheets.find((item) => item.id === foundTimesheetId);
  if (sheet) {
    sheet.totalHours = totalHours;
    sheet.status = getStatus(totalHours);
  }

  return NextResponse.json({
    success: true,
    message: "Entry deleted successfully",
  });
}