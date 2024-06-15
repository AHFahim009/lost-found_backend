import { Router } from "express";
import { DashboardControllers } from "./dashboardStats.controllers";

const router = Router()

router.get("/dashboard-stats",
  DashboardControllers.dashboardStats
)





export const DashboardStatsRoutes = router