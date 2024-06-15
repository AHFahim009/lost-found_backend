import asyncHandler from "../../utils/asyncHandler";
import sendResponse from "../../utils/sendResponse";
import { MyServices } from "./my.services";

const myLostReport = asyncHandler(async (req, res) => {
  const { userId } = req.user;
  const result = await MyServices.myLostReport(userId);

  sendResponse(res, {
    statusCode: 202,
    message: "My Lost Report Retrieval",
    data: result,
  });
});

const myFoundReport = asyncHandler(async (req, res) => {
  const { userId } = req.user;
  const result = await MyServices.myFoundReport(userId);

  sendResponse(res, {
    statusCode: 201,
    message: "My Found Report Retrieval",
    data: result,
  });
});
const myClaimReport = asyncHandler(async (req, res) => {
  const { userId } = req.user;
  const result = await MyServices.myClaimReport(userId);

  sendResponse(res, {
    statusCode: 201,
    message: "My claim Report Retrieval",
    data: result,
  });
});

const myStats = asyncHandler(async (req, res) => {
  const { userId } = req.user;
  const result = await MyServices.myStats(userId);

  sendResponse(res, {
    statusCode: 201,
    message: "My stats Retrieval",
    data: result,
  });
});

export const MyServicesController = {
  myLostReport,
  myFoundReport,
  myClaimReport,
  myStats
};
