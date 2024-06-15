import { z } from "zod";

const update = z.object({
  body: z.object({
    bio: z.string().optional(),
    age: z.number().min(1).optional(),
    photo: z.string().optional(),
  }),
});

export const profileZod = { update };
