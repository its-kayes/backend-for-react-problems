import request from "request";
import { Zoom } from "../models/zoomModel.js";
import catchAsync from "../utils/catchAsync.js";

export const createZoomMeeting = catchAsync(async (req, res) => {
  // const { zoomAccountId, zoomAccountName, zoomAccountEmail, zoomAccountType, zoomAccountStatus, zoomAccountPlan, zoomAccountPlanBase, zoomAccountPlanType, zoomAccountPlanFeature, zoomAccountPlanSeats, zoomAccountPlanSeatsUsed, zoomAccountPlanSeatsLeft, zoomAccountPlanMonthly } = req.body;
  const zoomMeeting = await Zoom.create(req.body);
  res.status(201).json({
    status: "success",
    data: {
      zoomMeeting,
    },
  });
});

export const getZoomMeetingDetails = catchAsync(async (req, res) => {
  //   const zoomMeeting = await Zoom.findById(req.params.id);
  //   res.status(200).json({
  //     status: "success",
  //     data: {
  //       zoomMeeting,
  //     },
  //   });
  res.status(200).json({
    status: "success",
    message: "This is the zoom meeting details",
  });
});

export const serverToServer = catchAsync(async (req, res) => {
  console.log(req.connection, "req");

  res.status(200).json({
    status: "success",
    message: "get Id address",
  });

  // request("https://jsonplaceholder.typicode.com/users", {})
  // request("http://example.com/data.json", (error, response, body) => {
  //   if (!error && response.statusCode == 200) {
  //     // If the request is successful, save the data to a file
  //     fs.writeFileSync("data.json", body);
  //   } else {
  //     console.log("Error: Could not fetch data from server");
  //   }
  // });
});
