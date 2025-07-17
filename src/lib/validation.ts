import z from "zod";

export const validationSchema = z.object({
    email: z.string().email("Invalid email address"),
    subject: z.string().min(2, "Subject is too short"),
    message: z.string().min(2, "Message is too short"),
})

export type ValidationSchema = z.infer<typeof validationSchema>