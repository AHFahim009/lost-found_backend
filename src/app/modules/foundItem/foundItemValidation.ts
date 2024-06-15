import { z } from "zod";

const createSchema = z.object({
  body: z.object({

    category: z.string(),
    foundItemName: z.string(),
    photo: z.string().nullable().optional(),
    description: z.string(),
    location: z.string(),
    foundDate: z.string(),
    phoneNumber: z.number().int().nullable().optional(),
    email: z.string().email().optional()
  })
})
const updateSchema = z.object({
  body: z.object({
    category: z.string().optional(),
    foundItemName: z.string().optional(),
    photo: z.string().nullable().optional(),
    description: z.string().optional(),
    location: z.string().optional(),
    foundDate: z.string().optional(),
    phoneNumber: z.number().int().nullable().optional(),
    email: z.string().email().optional()
  })
})


export const foundItemValidation = {
  createSchema,
  updateSchema
}