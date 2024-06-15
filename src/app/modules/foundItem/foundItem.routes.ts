import { Router } from "express";
import { FoundItemControllers } from "./foundItem.controllers";
import authGuard from "../../middlewares/authGuard";
import validationGuard from "../../middlewares/validationGuard";
import { foundItemValidation } from "./foundItemValidation";

const router = Router();
router.post(
  "/found-items",
  authGuard("USER", "ADMIN"),
  validationGuard(foundItemValidation.createSchema),
  FoundItemControllers.createFoundItem
);

router.get("/found-items", FoundItemControllers.getAllFoundItem);
router.get("/admin-found-items", FoundItemControllers.adminAllFoundItem);

router.get(
  "/single-found-item/:id",
  authGuard("USER", "ADMIN"),
  FoundItemControllers.singleFoundItem
);

router.delete(
  "/single-delete-found-item/:id",
  authGuard("USER"),
  FoundItemControllers.deleteFoundLostItem
);

router.patch(
  "/single-update-found-item/:id",
  authGuard("USER"),
  validationGuard(foundItemValidation.updateSchema),
  FoundItemControllers.updateSingleLostItem
);

export const FoundItemRoutes = router;
