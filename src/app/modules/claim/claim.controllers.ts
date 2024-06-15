import asyncHandler from "../../utils/asyncHandler";
import sendResponse from "../../utils/sendResponse";
import { ClaimServices } from "./claim.services";

const createClaim = asyncHandler(async (req, res) => {
  const result = await ClaimServices.createClaim(req.body, req.user)

  sendResponse(res, {
    statusCode: 201,
    message: "Claim created successfully",
    data: result
  })
})

const getAllClaim = asyncHandler(async (req, res) => {
  const result = await ClaimServices.getAllClaim();
  sendResponse(res, {
    statusCode: 201,
    message: "Claims retrieved successfully",
    data: result
  })

})

const updateClaim = asyncHandler(async (req, res) => {
  const { claimId } = req.params
  console.log("contr", req.body);

  const result = await ClaimServices.updateClaim(claimId, req.body);
  sendResponse(res, {
    statusCode: 200,
    message: "Claim updated successfully",
    data: result
  })

})

export const ClaimControllers = {
  createClaim,
  getAllClaim,
  updateClaim
}