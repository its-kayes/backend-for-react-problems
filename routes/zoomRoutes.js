import { Router } from "express";
import {
  createZoomMeeting,
  getZoomMeetingDetails,
  serverToServer,
} from "../controllers/zoomController.js";

const router = Router();

router.post("/", createZoomMeeting);
router.get("/details", getZoomMeetingDetails);
router.get("/sts", serverToServer);

export const zoomRoutes = router;
