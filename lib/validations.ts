import { z } from "zod";

export const addTaskSchema = z.object({
  project: z.string().min(1, "Project is required"),

  typeOfWork: z.string().min(1, "Type of work is required"),

  description: z
    .string()
    .min(5, "Description is required"),

  hours: z
    .number()
    .min(1)
    .max(24),
});