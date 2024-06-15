import { Router } from "express";
import { UserControllers } from "./user.controllers";
import validationGuard from "../../middlewares/validationGuard";
import { zodSchema } from "./user.zod";
import authGuard from "../../middlewares/authGuard";

const router = Router();

router.post(
  "/register",
  validationGuard(zodSchema.user),
  UserControllers.createUser
);

router.get("/all-user", authGuard("ADMIN"), UserControllers.getAllUser);

router.patch(
  "/update-user-role/:userId",
  authGuard("ADMIN"),
  UserControllers.updateUserRole
);

router.patch(
  "/delete-user/:userId",
  authGuard("ADMIN"),
  UserControllers.deleteUser
);

export const UserRoutes = router;
