

export class AppError extends Error {
  statusCode: number;
  errorDetails: string

  constructor(statusCode: number, errorDetail: string, stack = "") {
    super(errorDetail)
    this.statusCode = statusCode
    this.errorDetails = this.message
    if (stack) {
      this.stack = stack
    }
    else {
      Error.captureStackTrace(this, this.constructor)
    }
  }
}