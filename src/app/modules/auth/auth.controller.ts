import asyncHandler from "../../utils/asyncHandler";
import sendResponse from "../../utils/sendResponse";
import { AuthServices } from "./auth.services";

const login = asyncHandler(async (req, res) => {

  const result = await AuthServices.login(req.body)

  sendResponse(res, {
    statusCode: 200,
    "message": "User logged in successfully",
    data: result
  })
})



export const AuthControllers = {
  login
}