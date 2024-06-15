import asyncHandler from "../../utils/asyncHandler";
import { queryPicker } from "../../utils/queryPicker";
import sendResponse from "../../utils/sendResponse";
import { LostItemServices } from "./lostItem.services";

const lostItemCreate = asyncHandler(async (req, res) => {
  const result = await LostItemServices.lostItemCreate(req.body, req.user);

  sendResponse(res, {
    statusCode: 201,
    message: "lost item reported successfully",
    data: result,
  });
});

const getAllLostItem = asyncHandler(async (req, res) => {
  const selectedFields = ["searchTerm", "foundItemName"];
  const paginationFields = ["page", "take", "sortBy", "sortOrder"];
  const searchingQuery = queryPicker(req.query, selectedFields);
  const paginationQuery = queryPicker(req.query, paginationFields);

  const result = await LostItemServices.getAllLostItem(
    searchingQuery,
    paginationQuery
  );

  sendResponse(res, {
    statusCode: 200,
    message: "Found items retrieved successfully",
    meta: result.meta,
    data: result.data,
  });
});

const getSingleLostItem = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const result = await LostItemServices.getSingleLostItem(id);

  sendResponse(res, {
    statusCode: 200,
    message: "single items retrieved successfully",
    data: result,
  });
});

const deleteSingleLostItem = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const result = await LostItemServices.deleteSingleLostItem(id);

  sendResponse(res, {
    statusCode: 200,
    message: "Delete successfully",
    data: result,
  });
});

const updateSingleLostItem = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const result = await LostItemServices.updateSingleLostItem(id, req.body);

  sendResponse(res, {
    statusCode: 200,
    message: "Lost item update successfully",
    data: result,
  });
});

export const LostItemControllers = {
  lostItemCreate,
  getAllLostItem,
  getSingleLostItem,
  deleteSingleLostItem,
  updateSingleLostItem
};
