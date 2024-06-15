import { Router } from "express";
import authGuard from "../../middlewares/authGuard";
import { ClaimControllers } from "./claim.controllers";
import validationGuard from "../../middlewares/validationGuard";
import { ClaimZod } from "./claim.zod";

const router = Router()

router.post("/claims", authGuard("USER", "ADMIN"), ClaimControllers.createClaim)
router.get("/claims", authGuard(), ClaimControllers.getAllClaim)
router.put("/claims/:claimId", authGuard(), ClaimControllers.updateClaim)

export const ClaimRoutes = router