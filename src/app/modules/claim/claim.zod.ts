import { z } from "zod";

const schema = z.object({
  body: z.object({
    status: z.enum(["PENDING", "APPROVED", "REJECTED"])
  })
})


export const ClaimZod = {
  schema
}