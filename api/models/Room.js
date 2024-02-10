import mongoose from "mongoose";
import Hotel from "./Hotel.js";
import User from "./User.js";
const RoomSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    maxPeople: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    hotel: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Hotel
    },
    roomNumbers: [{ number: Number, unavailableDates: {type: [Date]}}],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User
    }
    
  },
  { timestamps: true }
);

export default mongoose.model("Room", RoomSchema);
