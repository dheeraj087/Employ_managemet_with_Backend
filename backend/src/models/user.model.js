import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      lowercase: true,
      required: true,
      trim: true,
      unique: true,
      index: true,
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

// here is the encrypt or decrypt methods
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  // next();
}); // always don't craeate the arrow function

UserSchema.methods.isCompare = async function (password) {
  return await bcrypt.compare(password, this.password);
};

//  here is the reffres token's methods
UserSchema.methods.accsesToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      username: this.username,
      email: this.email,
      fullName: this.fullName,
    },
    process.env.ACCSESS_TOKEN,
    {
      expiresIn: process.env.EXP_ACC_DATE,
    }
  );
};
UserSchema.methods.RefreshToken = function () {
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.REFRESH_TOKEN,
    {
      expiresIn: process.env.EXP_REF_DATE,
    }
  );
};
export const User = mongoose.model("User", UserSchema);
