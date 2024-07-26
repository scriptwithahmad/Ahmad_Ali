import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title Required"],
  },
  desc: {
    type: String,
    required: [true, "Title Required"],
  },
});

export default mongoose.models.todos || mongoose.model("todos", todoSchema);
