import { DailyTasks } from "@/types";

export const getStatus = (hours: number) => {
  if (hours === 0) return "MISSING";

  if (hours >= 40) return "COMPLETED";

  return "INCOMPLETE";
};

export const calculateTotalHours = (
  groups: DailyTasks[]
) => {
  return groups.reduce((acc, group) => {
    return (
      acc +
      group.entries.reduce(
        (sum, task) => sum + task.hours,
        0
      )
    );
  }, 0);
};