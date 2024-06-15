import asyncHandler from "../../utils/asyncHandler";
import sendResponse from "../../utils/sendResponse";
import { ProfileServices } from "./profile.services";

const getMyProfile = asyncHandler(async (req, res) => {
  const result = await ProfileServices.getMyProfile(req.user);
  sendResponse(res, {
    statusCode: 200,
    message: "Profile retrieved successfully",
    data: result
  })
})
const updateProfile = asyncHandler(async (req, res) => {
  const { id } = req.params
  const result = await ProfileServices.updateProfile(id, req.body);
  sendResponse(res, {
    statusCode: 200,
    message: "Profile Data Updated Successfully",
    data: result
  })
})

const singleUserProfile = asyncHandler(async (req, res) => {
  const { id } = req.params
  const result = await ProfileServices.singleUserProfile(id);
  sendResponse(res, {
    statusCode: 200,
    message: "single user profile",
    data: result
  })
})

export const ProfileControllers = {
  getMyProfile,
  updateProfile,
  singleUserProfile
}