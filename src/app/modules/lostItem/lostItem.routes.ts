import { Router } from "express";
import authGuard from "../../middlewares/authGuard";
import { LostItemControllers } from "./lostItem.controllers";
import validationGuard from "../../middlewares/validationGuard";
import { lostItemValidation } from "./lostItemValidation";

const router = Router();
router.post("/create-lost-item",
  authGuard("USER"),
  validationGuard(lostItemValidation.createSchema),
  LostItemControllers.lostItemCreate);

router.get("/get-lost-items", LostItemControllers.getAllLostItem)

router.get("/single-lost-item/:id", authGuard("USER"), LostItemControllers.getSingleLostItem)

router.delete("/single-delete-lost-item/:id", authGuard("USER"), LostItemControllers.deleteSingleLostItem)

router.patch("/single-update-item/:id",
  authGuard("USER"),
  validationGuard(lostItemValidation.updateSchema),
  LostItemControllers.updateSingleLostItem)

export const LostItemRoutes = router;
