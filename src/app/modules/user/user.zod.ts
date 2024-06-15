import { z } from "zod";

const profile = z.object({
  bio: z.string({
    required_error: "Bio field is required"
  }).optional(),
  age: z.number({
    required_error: "Age field is required"
  }).min(1).optional(),
  photo: z.string().optional()
})

const user = z.object({
  body: z.object({
    name: z.string({
      required_error: "Name field is required"
    }),
    email: z.string().email({
      message: "Email must be a valid email address.",
    }),
    password: z.string({
      required_error: "Password field is required"
    }),
    profile: profile.optional()
  })
});

export const zodSchema = { user }
