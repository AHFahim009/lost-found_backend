import express, { Request, Response } from "express";
import cors from "cors";
import { UserRoutes } from "./app/modules/user/user.routes";
import { AuthRoutes } from "./app/modules/auth/auth.routes";

import { FoundItemRoutes } from "./app/modules/foundItem/foundItem.routes";
import { ClaimRoutes } from "./app/modules/claim/claim.routes";
import { ProfileRoutes } from "./app/modules/profile/profile.routes";
import globalError from "./app/middlewares/globalError";
import { notFound } from "./app/middlewares/notFound";
import { LostItemRoutes } from "./app/modules/lostItem/lostItem.routes";
import { MyServicesRouter } from "./app/modules/myServices/my.routes";
import { DashboardStatsRoutes } from "./app/modules/dashboardStats/dashboardStats.routes";


const app = express();
// parser
app.use(express.json());
// cors
app.use(cors({ origin: ["http://localhost:3000", "https://lost-found-frontend-rkm9.vercel.app"] }));

app.use("/api", UserRoutes);
app.use("/api", AuthRoutes);
app.use("/api", FoundItemRoutes);
app.use("/api", LostItemRoutes);
app.use("/api", ClaimRoutes);
app.use("/api", ProfileRoutes);
app.use("/api", MyServicesRouter);
app.use("/api", DashboardStatsRoutes);



app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Prisma SQL Assignment-04"
  })
})
app.use(globalError);
app.use(notFound);

export default app;
