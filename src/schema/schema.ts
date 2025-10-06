import z from "zod";

export const formSchema = z.object({
  branch: z.string().min(1, "Please select a branch"),
  email: z.email(),
});
