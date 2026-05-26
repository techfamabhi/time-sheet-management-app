export interface Timesheet {
  id: number;
  week: number;
  dateRange: string;
  status: "COMPLETED" | "INCOMPLETE" | "MISSING";
  totalHours: number;

  startDate?: string;
  endDate?: string;
}

export interface TaskEntry {
  id: number;

  date: string;

  title: string;

  project: string;

  typeOfWork: string;

  description: string;

  hours: number;
}

export interface DailyTasks {
  date: string;

  entries: TaskEntry[];
}

export interface AddTaskFormData {
  project: string;

  typeOfWork: string;

  description: string;

  hours: number;
}

export interface ApiResponse<T> {
  success: boolean;

  message?: string;

  data: T;
}

export type StatusType =
  | "COMPLETED"
  | "INCOMPLETE"
  | "MISSING";