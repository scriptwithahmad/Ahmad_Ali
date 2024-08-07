import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      trim: true,
      required: [true, "User Name Required"],
    },
    email: {
      type: String,
      trim: true,
      required: [true, "User Name Required"],
    },
    username: {
      type: String,
      trim: true,
      required: [true, "User Name Required"],
    },
    password: {
      type: String,
      required: [true, "Password Required!"],
    },
    isAdmin: {
      type: Boolean,
      default: false,
      required: [true, "Is Admin Field is Required!"],
    },
    photo: {
      type: String,
      required: false,
    },
  },

  { timestamps: true }
);

export default mongoose?.models?.users || mongoose?.model("users", userSchema);
