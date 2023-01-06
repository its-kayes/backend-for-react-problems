import { Router } from "express";
import { zoomRoutes } from "./routes/zoomRoutes.js";

const router = Router();

router.use("/zoom", zoomRoutes);

export default router;
