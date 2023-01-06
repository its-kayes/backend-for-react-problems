import { model, Schema } from "mongoose";

const zoomSchema = new Schema(
  {
    zoomId: {
      type: String,
      required: true,
    },
    zoomName: {
      type: String,
      required: true,
    },
    zoomEmail: {
      type: String,
      required: true,
    },
    zoomPassword: {
      type: String,
      required: true,
    },
    zoomToken: {
      type: String,
      required: true,
    },
    zoomRefreshToken: {
      type: String,
      required: true,
    },
    zoomTokenExpiry: {
      type: String,
      required: true,
    },
    zoomUserId: {
      type: String,
      required: true,
    },
    zoomAccountId: {
      type: String,
      required: true,
    },
    zoomAccountName: {
      type: String,
      required: true,
    },
    zoomAccountEmail: {
      type: String,
      required: true,
    },
    zoomAccountType: {
      type: String,
      required: true,
    },
    zoomAccountStatus: {
      type: String,
      required: true,
    },
    zoomAccountPlan: {
      type: String,
      required: true,
    },
    zoomAccountPlanBase: {
      type: String,
      required: true,
    },
    zoomAccountPlanType: {
      type: String,
      required: true,
    },
    zoomAccountPlanFeature: {
      type: String,
      required: true,
    },
    zoomAccountPlanSeats: {
      type: String,
      required: true,
    },
    zoomAccountPlanSeatsUsed: {
      type: String,
      required: true,
    },
    zoomAccountPlanSeatsLeft: {
      type: String,
      required: true,
    },
    zoomAccountPlanMonthly: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Zoom = model("Zoom", zoomSchema);
