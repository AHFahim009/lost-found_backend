import { Router } from "express";
import { ProfileControllers } from "./profile.controllers";
import authGuard from "../../middlewares/authGuard";
import validationGuard from "../../middlewares/validationGuard";
import { profileZod } from "./profile.zod";

const router = Router()

router.get("/my-profile", authGuard(), ProfileControllers.getMyProfile)
router.put("/my-profile/:id", authGuard(), ProfileControllers.updateProfile)
router.get("/my-profile/:id", authGuard(), ProfileControllers.singleUserProfile)

export const ProfileRoutes = router