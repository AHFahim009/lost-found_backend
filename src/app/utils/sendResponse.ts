import { Response } from "express";

type TResponseData<T> = {
  statusCode: number;
  message: string;
  data: T;
  meta?: {
    total: number,
    page: number,
    limit: number
  }
};

const sendResponse = <T>(res: Response, responseData: TResponseData<T>) => {
  const { statusCode, message, data, meta } = responseData;

  res.status(statusCode).json({
    success: true,
    message,
    meta,
    data,
  });
};

export default sendResponse;
