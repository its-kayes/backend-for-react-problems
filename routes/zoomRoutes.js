import { Router } from "express";
import {
  createZoomMeeting,
  getZoomMeetingDetails,
} from "../controllers/zoomController.js";

const router = Router();

router.post("/", createZoomMeeting);
router.get("/details", getZoomMeetingDetails);

export const zoomRoutes = router;
