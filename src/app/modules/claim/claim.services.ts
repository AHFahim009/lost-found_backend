import { Claim } from "@prisma/client";
import { JwtPayload } from "jsonwebtoken";
import prisma from "../../utils/prismaClient";
import { AppError } from "../../errors/AppError";

const createClaim = async (payload: Claim, user: JwtPayload) => {

  const userproduct = await prisma.foundItem.findFirst({
    where: {
      userId: user.userId
    }
  })

  if (userproduct) {
    throw new Error("sorry! this is your post product")
  }
  //  if a product claim status approved ?
  const alreadyApproved = await prisma.claim.findUnique({
    where: {
      foundItemId: payload.foundItemId,
      status: "APPROVED",
    },
  });
  if (alreadyApproved) {
    throw new AppError(404, "You can't claim this product!!");
  }

  // a logged in user can create a claim post of a found item
  payload.userId = user.userId;


  const result = await prisma.claim.create({
    data: payload,
  });
  return result;
};

const getAllClaim = async () => {
  const result = await prisma.claim.findMany({
    include: {
      foundItem: true
    },
  });

  return result;
};

const updateClaim = async (claimId: string, payload: any) => {
  console.log("fronted", { claimId, payload });

  const result = prisma.claim.update({
    where: {
      foundItemId: claimId,
    },
    data: payload
  });

  return result;
};

export const ClaimServices = {
  createClaim,
  getAllClaim,
  updateClaim,
};
