import asyncHandler from "../../utils/asyncHandler";
import { queryPicker } from "../../utils/queryPicker";
import sendResponse from "../../utils/sendResponse";
import { FoundItemServices } from "./foundItem.services";

const createFoundItem = asyncHandler(async (req, res) => {
  const result = await FoundItemServices.createFoundItem(req.body, req.user);

  sendResponse(res, {
    statusCode: 201,
    message: "Found item reported successfully",
    data: result,
  });
});

const getAllFoundItem = asyncHandler(async (req, res) => {
  const selectedFields = ["searchTerm", "foundItemName", "category"];
  const paginationFields = ["page", "take", "sortBy", "sortOrder"]
  const searchingQuery = queryPicker(req.query, selectedFields)
  const paginationQuery = queryPicker(req.query, paginationFields)


  const result = await FoundItemServices.getAllFoundItem(searchingQuery, paginationQuery);

  sendResponse(res, {
    statusCode: 200,
    message: "Found items retrieved successfully",
    meta: result.meta,
    data: result.data,
  });
});
const adminAllFoundItem = asyncHandler(async (req, res) => {
  const selectedFields = ["searchTerm", "foundItemName", "category"];
  const paginationFields = ["page", "take", "sortBy", "sortOrder"]
  const searchingQuery = queryPicker(req.query, selectedFields)
  const paginationQuery = queryPicker(req.query, paginationFields)


  const result = await FoundItemServices.adminAllFoundItem(searchingQuery, paginationQuery);

  sendResponse(res, {
    statusCode: 200,
    message: "Found items retrieved successfully",
    meta: result.meta,
    data: result.data,
  });
});

const singleFoundItem = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const result = await FoundItemServices.singleFoundItem(id);

  sendResponse(res, {
    statusCode: 200,
    message: "single found item retrieved",
    data: result,
  });
});



const deleteFoundLostItem = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const result = await FoundItemServices.deleteFoundItem(id);

  sendResponse(res, {
    statusCode: 200,
    message: "Delete successfully",
    data: result,
  });
});


const updateSingleLostItem = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const result = await FoundItemServices.updateSingleFoundItem(id, req.body);

  sendResponse(res, {
    statusCode: 200,
    message: "Found item update successfully",
    data: result,
  });
});



export const FoundItemControllers = {
  createFoundItem,
  getAllFoundItem,
  deleteFoundLostItem,
  singleFoundItem,
  updateSingleLostItem,
  adminAllFoundItem
};
