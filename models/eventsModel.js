import { model, Schema } from "mongoose";

const eventsModel = new Schema(
  {
    events: [{ end: Date, start: Date, title: String, startStr: String }],
    userName: String,
    userId: String,
    userRole: String,
    userEmail: String,
    status: String,
  },
  {
    timestamps: true,
  }
);

export const Events = model("Events", eventsModel);
