import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError";
import httpStatus from "http-status";
import asyncHandler from "../utils/asyncHandler";
import jwt, { JwtPayload } from "jsonwebtoken"
import config from "../config";

const authGuard = (...roles: string[]) =>
  asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization


    if (!token) {
      throw new AppError(httpStatus.UNAUTHORIZED, "Your are not authorized")
    }

    let decodeToken;
    try {
      decodeToken = jwt.verify(token, config.ACCESS_TOKEN as string)
    } catch (error) {
      next(error)
    }

    const { role } = decodeToken as JwtPayload
    if (roles.length && !roles.includes(role)) {
      throw new AppError(httpStatus.FORBIDDEN, 'Forbidden! You have no especial access');
    }



    // jwt decoded information attached with the request
    req.user = decodeToken as JwtPayload
    next()
  })



export default authGuard