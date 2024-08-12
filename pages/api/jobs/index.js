import dbConnect from "@/config/dbConnect";
import jobsSchema from "@/models/jobs";

export default async function handler(req, res) {
  dbConnect();
  switch (req.method) {
    case "POST":
      try {
        const addJob = await jobsSchema.create(req.body);
        res.status(201).json({
          success: true,
          addJob,
        });
      } catch (error) {
        console.log(error);
      }

      break;

    case "GET":
      try {
        const getJob = await jobsSchema.find();

        res.status(200).json({
          success: true,
          getJob,
        });
      } catch (error) {
        console.log(error);
      }

      break;

    default:
      break;
  }
}
