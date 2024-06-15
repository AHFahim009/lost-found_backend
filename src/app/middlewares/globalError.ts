import { ErrorRequestHandler } from "express";
import httpStatus from "http-status";
import { alreadyExit, zodError } from "../errors/handleError";
import { ZodError } from "zod";
import { AppError } from "../errors/AppError";

const globalError: ErrorRequestHandler = (err, req, res, next) => {
  let statusCode = httpStatus.INTERNAL_SERVER_ERROR as number
  let success = false;
  let message = err.message || "error message";
  let errorDetails = err || ""

  if (err instanceof ZodError) {
    ({ message, errorDetails } = zodError(err))
  }
  else if (err.code === "P2002") {
    ({ errorDetails } = alreadyExit(err))
  }
  else if (err instanceof AppError) {
    ({ statusCode, message } = err)
  }



  return res.status(statusCode).json({
    statusCode,
    success,
    message,
    errorDetails,
    error: err
  });
};

export default globalError;
