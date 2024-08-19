import mongoose, { Schema } from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: {
      trim: true,
      type: String,
      required: [true, "Title Requried!"],
    },
    desc: {
      trim: true,
      type: String,
      required: [true, "Description Required!"],
    },
    logo: {
      trim: true,
      type: String,
    },
    experience: {
      type: String,
      trim: true,
    },
    jobType: {
      type: String,
      trim: true,
      enm: ["Full Time", "Part Time", "Freelance", "Internship", "Remote"],
    },
    location: {
      type: String,
      trim: true,
    },
    salaryType: {
      type: String,
      trim: true,
      enm: ["Hourly", "Daily", "Weekly", "Monthly", "Yearly"],
    },
    salary: {
      type: String,
      trim: true,
    },
    companyUser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "companines", // this is the name of the model
      // required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.jobs || mongoose.model("jobs", jobSchema);
