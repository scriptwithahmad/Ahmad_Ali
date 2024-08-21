import dbConnect from "@/config/dbConnect";
import jobsSchema from "@/models/jobs";

export default async function handler(req, res) {
  dbConnect();
  switch (req.method) {
    case "GET":
      try {
        const getSingleJob = await jobsSchema.findById(req.query.id);

        res.status(200).json({
          success: true,
          getSingleJob,
        });
      } catch (error) {
        console.log(error);
      }

      break;

    default:
      break;
  }
}
