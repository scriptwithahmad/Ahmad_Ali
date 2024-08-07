import mongoose from "mongoose";

const companySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Company Name Required"],
    },
    logo: {
      type: String,
      required: false,
    },
    desc: {
      trim: true,
      type: String,
      required: [true, "Description Required!"],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users", // this is the name of the model
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose?.models?.companines ||
  mongoose?.model("companines", companySchema);
