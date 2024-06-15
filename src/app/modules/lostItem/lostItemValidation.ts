import { z } from "zod";

const createSchema = z.object({
  body: z.object({
    category: z.string(),
    lostItemName: z.string(),
    description: z.string(),
    location: z.string(),
    lostDate: z.string(),
    photo: z.string().nullable().optional(),
    phoneNumber: z.number().int().nullable().optional(),
    email: z.string().email().nullable().optional()
  })
})
const updateSchema = z.object({
  body: z.object({
    category: z.string().optional(),
    lostItemName: z.string().optional(),
    description: z.string().optional(),
    location: z.string().optional(),
    lostDate: z.string().optional(),
    photo: z.string().nullable().optional(),
    phoneNumber: z.number().int().nullable().optional(),
    email: z.string().email().nullable().optional()
  })
})


export const lostItemValidation = {
  createSchema,
  updateSchema
}