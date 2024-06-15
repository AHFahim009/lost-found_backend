import asyncHandler from "../../utils/asyncHandler";
import sendResponse from "../../utils/sendResponse";
import { UserServices } from "./user.services";

const createUser = asyncHandler(async (req, res) => {
  const result = await UserServices.createUser(req.body);
  sendResponse(res, {
    statusCode: 201,
    message: "User registered successfully",
    data: result,
  });
});
const getAllUser = asyncHandler(async (req, res) => {
  const result = await UserServices.getAllUser();
  sendResponse(res, {
    statusCode: 201,
    message: "get all user",
    data: result,
  });
});

const updateUserRole = asyncHandler(async (req, res) => {
  const { userId } = req.params;

  const result = await UserServices.updateUserRole(userId, req.body);
  sendResponse(res, {
    statusCode: 201,
    message: "update user role",
    data: result,
  });
});

const deleteUser = asyncHandler(async (req, res) => {
  const { userId } = req.params;

  const result = await UserServices.deleteUser(userId, req.user);
  sendResponse(res, {
    statusCode: 201,
    message: "deleted successfully",
    data: result,
  });
});

export const UserControllers = {
  createUser,
  getAllUser,
  updateUserRole,
  deleteUser
};
