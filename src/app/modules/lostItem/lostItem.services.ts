import { LostItems } from "@prisma/client";
import prisma from "../../utils/prismaClient";
import { JwtPayload } from "jsonwebtoken";
import searchingHelper from "../../queryHelper/searchingHelper";
import paginationHelper from "../../queryHelper/paginationHelper";
import { AppError } from "../../errors/AppError";

const lostItemCreate = async (payload: LostItems, user: JwtPayload) => {


  // a logged in user can create a found item post
  // if (!user) {
  //   throw new AppError(404, "sorry no user found");
  // }
  // payload.userId = user.userId;
  const result = await prisma.lostItems.create({
    data: payload
  });

  return result;
};

const getAllLostItem = async (searchingQuery: any, paginationQuery: any) => {
  const conditionFields = searchingHelper(searchingQuery);
  const { skip, take, orderBy, page } = paginationHelper(paginationQuery);
  const result = await prisma.lostItems.findMany({
    where: {
      AND: conditionFields,
    },

    take,
    skip,
    orderBy,
    include: {
      user: true,
    },
  });

  const totalData = await prisma.lostItems.count();
  return {
    meta: {
      total: totalData,
      page,
      limit: take,
    },
    data: result,
  };
};


const getSingleLostItem = async (lostItemId: string) => {



  const result = await prisma.lostItems.findUnique({
    where: {
      id: lostItemId
    }
  })

  return result
}

const deleteSingleLostItem = async (lostItemId: string) => {



  return await prisma.lostItems.delete({
    where: {
      id: lostItemId
    }
  })
}

const updateSingleLostItem = async (id: string, payload: any) => {
  const result = await prisma.lostItems.update({
    where: {
      id: id

    },
    data: payload
  })
  return result
}

export const LostItemServices = {
  lostItemCreate,
  getAllLostItem,
  getSingleLostItem,
  deleteSingleLostItem,
  updateSingleLostItem
};
