import { ZodError } from "zod";

export const zodError = (err: ZodError) => ({
  message: err?.issues?.map((issue) => issue.message).join(","),
  errorDetails: {
    issues: err?.issues?.map((issue) => ({
      field: issue.path[issue.path.length - 1],
      message: issue.message,
    })),
  },
});

export const alreadyExit = (err: any) => ({
  errorDetails: "Already Exit"
})

const appError = () => {

}