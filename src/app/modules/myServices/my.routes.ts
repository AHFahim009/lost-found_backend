import { Router } from "express";
import { MyServicesController } from "./my.controller";
import authGuard from "../../middlewares/authGuard";
import { UserRole } from "@prisma/client";

const router = Router();

router.get(
  "/my-lost-reports",
  authGuard(UserRole.USER),
  MyServicesController.myLostReport
);

router.get(
  "/my-found-reports",
  authGuard(UserRole.USER),

  MyServicesController.myFoundReport
);
router.get(
  "/my-claim-reports",
  authGuard(UserRole.USER),
  MyServicesController.myClaimReport
);
router.get(
  "/my-stats",
  authGuard(UserRole.USER),
  MyServicesController.myStats
);

export const MyServicesRouter = router;
