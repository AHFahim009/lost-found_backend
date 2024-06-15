import { UserProfile } from "@prisma/client"
import prisma from "../../utils/prismaClient"
import { JwtPayload } from "jsonwebtoken"
import { AppError } from "../../errors/AppError"

const getMyProfile = async (user: JwtPayload) => {
  const result = await prisma.userProfile.findUniqueOrThrow({
    where: {
      userId: user.userId
    },
    include: {
      user: true
    }
  })
  return result
}


const updateProfile = async (id: string, payload: Partial<UserProfile>) => {

  const findUser = await prisma.user.findUnique({
    where: {
      id: id
    }
  })

  if (!findUser) {
    throw new AppError(404, "sorry user doesn't found")
  }

  const result = await prisma.userProfile.update({
    where: {
      userId: id
    },
    include: {
      user: true
    },
    data: payload
  })

  return result
}
const singleUserProfile = async (id: string) => {

  const findUser = await prisma.user.findUnique({
    where: {
      id: id
    }
  })

  if (!findUser) {
    throw new AppError(404, "sorry user doesn't found")
  }

  const result = await prisma.userProfile.findUnique({
    where: {
      userId: id
    }
  })

  return result
}


export const ProfileServices = {
  getMyProfile,
  updateProfile,
  singleUserProfile
}