import { getStatus, calculateTotalHours } from "@/lib/utils";
import { DailyTasks } from "@/types";
import { describe, it, expect } from "vitest";

describe("getStatus", () => {
  it("should return MISSING when hours is 0", () => {
    expect(getStatus(0)).toBe("MISSING");
  });

  it("should return INCOMPLETE when hours is greater than 0 but less than 40", () => {
    expect(getStatus(10)).toBe("INCOMPLETE");
    expect(getStatus(39.5)).toBe("INCOMPLETE");
  });

  it("should return COMPLETED when hours is 40 or more", () => {
    expect(getStatus(40)).toBe("COMPLETED");
    expect(getStatus(45)).toBe("COMPLETED");
  });
});

describe("calculateTotalHours", () => {
  it("should calculate total hours of zero tasks correctly", () => {
    expect(calculateTotalHours([])).toBe(0);
  });

  it("should calculate total hours of a daily task correctly", () => {
    const dailyTasks: DailyTasks[] = [
      {
        date: "Jan 1",
        entries: [
          {
            id: 1,
            date: "Jan 1",
            title: "Task 1",
            project: "P1",
            typeOfWork: "Dev",
            description: "D1",
            hours: 4,
          },
          {
            id: 2,
            date: "Jan 1",
            title: "Task 2",
            project: "P1",
            typeOfWork: "Bug",
            description: "D2",
            hours: 8,
          },
        ],
      },
      {
        date: "Jan 2",
        entries: [
          {
            id: 3,
            date: "Jan 2",
            title: "Task 3",
            project: "P2",
            typeOfWork: "Testing",
            description: "D3",
            hours: 6,
          },
        ],
      },
    ];

    expect(calculateTotalHours(dailyTasks)).toBe(18);
  });
});
