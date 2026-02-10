import mongoose from "mongoose";

const EmploysSchema = mongoose.Schema(
  {
    empName: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    empId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      unique:true,
      lowercase: true,
      index: true,
    },
    empBio: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    empimgPath: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    favorite: {
      type: Boolean,
      default: false,
      index: true,
    },
    like: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const Employ = mongoose.model("Employ", EmploysSchema);
/* 

*/