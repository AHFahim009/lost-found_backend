import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import config from "../../config";
import { JwtPayload } from "jsonwebtoken";
import { AppError } from "../../errors/AppError";

const prisma = new PrismaClient();

const createUser = async (payload: any) => {
  const hashedPassword = await bcrypt.hash(
    payload.password,
    Number(config.SALT_PASS)
  );

  const result = await prisma.$transaction(async (transactionClient) => {
    const userData = {
      name: payload.name,
      email: payload.email,
      password: hashedPassword,
    };

    const createUser = await transactionClient.user.create({
      data: userData,
    });

    const profileData = {
      userId: createUser.id,
      bio: payload.profile?.bio,
      age: payload.profile?.age,
      profilePhoto: payload.profile?.profilePhoto,
    };

    await transactionClient.userProfile.create({
      data: profileData,
    });
    return profileData;
  });

  const user = await prisma.user.findUniqueOrThrow({
    where: {
      id: result.userId,
    },
    include: {
      profile: true,
    },
  });

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
    profile: user.profile,
  };
};

const getAllUser = async () => {
  const result = await prisma.user.findMany({
    where: {
      isDeleted: false,

    },
    select: {
      id: true,
      role: true,
      name: true,
      email: true,
      needPasswordChange: true,
      createdAt: true,
      updatedAt: true,
      profile: {
        select: {
          id: true,
          userId: true,
          profilePhoto: true,
          bio: true,
          age: true,
          createdAt: true,
          updatedAt: true,
        },
      },
    },
  });

  return result;
};

const updateUserRole = async (userId: string, payload: any) => {

  const result = await prisma.user.update({
    where: {
      id: userId,
    },
    data: payload,
  });

  return null;
};

const deleteUser = async (userId: string, user: JwtPayload) => {
  if (
    user.userId === userId
  ) throw new AppError(400, "Can't delete active user")

  await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      isDeleted: true
    }

  });

  return null;
};

export const UserServices = {
  createUser,
  getAllUser,
  deleteUser,
  updateUserRole
};
