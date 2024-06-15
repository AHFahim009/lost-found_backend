import asyncHandler from "../../utils/asyncHandler";
import sendResponse from "../../utils/sendResponse";
import { DashboardServices } from "./dashboardStats.services";

const dashboardStats = asyncHandler(async (req, res) => {

  const result = await DashboardServices.dashboardStats()

  sendResponse(res, {
    statusCode: 201,
    message: "Dashboard stats",
    data: result
  })

})

export const DashboardControllers = {
  dashboardStats
}