import { FoundItem } from "@prisma/client";
import prisma from "../../utils/prismaClient";
import { JwtPayload } from "jsonwebtoken";
import searchingHelper from "../../queryHelper/searchingHelper";
import paginationHelper from "../../queryHelper/paginationHelper";
import { AppError } from "../../errors/AppError";

const createFoundItem = async (payload: FoundItem, user: JwtPayload) => {
  // a logged in user can create a found item post
  if (!user.userId) throw new AppError(404, "sorry no user found");
  payload.userId = user.userId;

  const isUserExit = await prisma.user.findUnique({
    where: {
      id: user.userId
    }
  })

  if (!isUserExit) throw new AppError(404, "sorry user doesn't exit");


  const result = await prisma.foundItem.create({
    data: payload,
  });

  return result;
};

const getAllFoundItem = async (searchingQuery: any, paginationQuery: any) => {
  const conditionFields = searchingHelper(searchingQuery);
  const { skip, take, orderBy, page } = paginationHelper(paginationQuery);
  const result = await prisma.foundItem.findMany({
    where: {
      AND: conditionFields,
    },

    take,
    skip,
    orderBy,

    include: {
      user: true,

      Claim: {
        select: { status: true },
      },
    },
  });

  const totalData = await prisma.foundItem.count();

  return {
    meta: {
      total: totalData,
      page,
      limit: take,
    },
    data: result,
  };
};

const adminAllFoundItem = async (searchingQuery: any, paginationQuery: any) => {
  const conditionFields = searchingHelper(searchingQuery);
  const { skip, take, orderBy, page } = paginationHelper(paginationQuery);
  const result = await prisma.foundItem.findMany({
    where: {
      AND: conditionFields,
    },

    take,
    skip,
    orderBy,

    include: {
      user: true,
      Claim: true
    },
  });

  const totalData = await prisma.foundItem.count();

  return {
    meta: {
      total: totalData,
      page,
      limit: take,
    },
    data: result,
  };
};


const singleFoundItem = async (id: string) => {


  return await prisma.foundItem.findUniqueOrThrow({
    where: {
      id: id
    },
    include: {
      Claim: true
    }
  })
}
const deleteFoundItem = async (id: string) => {


  return await prisma.foundItem.delete({
    where: {
      id: id
    }
  })
}

const updateSingleFoundItem = async (id: string, payload: any) => {
  console.log("frontend", { id, payload });

  const result = await prisma.foundItem.update({
    where: {
      id: id

    },
    data: payload
  })
  return result
}


export const FoundItemServices = {
  createFoundItem,
  getAllFoundItem,
  singleFoundItem,
  deleteFoundItem,
  updateSingleFoundItem,
  adminAllFoundItem
};
