import httpStatus from "http-status";
import { AppError } from "../../errors/AppError";
import prisma from "../../utils/prismaClient";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

type TAuth = {
  email: string;
  password: string;
};
const login = async (payload: TAuth) => {
  // find user by the given email
  const findUser = await prisma.user.findUniqueOrThrow({
    where: {
      email: payload.email,
      isDeleted: false
    },
  });

  // check the exiting password of the user with given passwords from payload
  const passwordChecking: boolean = await bcrypt.compare(
    payload.password,
    findUser.password
  );
  if (!passwordChecking) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "Sorry! Your password doesn't match"
    );
  }

  // extract some information of the user and store in secret token
  const jwtPayload = {
    userId: findUser.id,
    userName: findUser.name,
    email: findUser.email,
    role: findUser.role,
  };
  const accessToken = jwt.sign(jwtPayload, "secret1234", {
    algorithm: "HS256",
    expiresIn: "30d",
  });

  return {
    accessToken,
  };
};

export const AuthServices = {
  login,
};
