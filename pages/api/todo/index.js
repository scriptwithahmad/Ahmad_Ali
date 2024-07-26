import dbConnect from "@/config/dbConnect";
import todoModel from "@/models/todo";

export default async function handler(req, res) {
  dbConnect();

  switch (req.method) {
    case "POST":
      try {
        // console.log(req.body);

        const { title, desc } = req.body;

        if (!title || !desc) {
          res.status(400).json({
            success: false,
            message: "kindly fill all fields",
          });
        }

        const addTodo = await todoModel.create(req.body);

        res.status(200).json({
          success: true,
          message: addTodo,
        });
      } catch (error) {
        console.log(error);
      }
      break;

    case "GET":
      try {
        const getTodo = await todoModel.find();

        res.status(200).json({
          success: true,
          message: getTodo  ,
        });
      } catch (error) {
        console.log(error);
      }

    default:
      break;
  }
}
