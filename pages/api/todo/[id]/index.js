import dbConnect from "@/config/dbConnect";
import todoModel from "@/models/todo";

export default async function handler(req, res) {
  dbConnect();

  switch (req.method) {
    case "GET":
      try {
        const getTodo = await todoModel.findById(req.query.id);

        res.status(200).json({
          success: true,
          message: "get todo",
          getTodo,
        });
      } catch (error) {
        console.log(error);
      }

    case "DELETE":
      try {
        const delPost = await todoModel.findByIdAndDelete(req.query.id);

        res.status(200).json({
          success: true,
          message: "todo deleted!",
        });
      } catch (error) {
        console.log(error);
      }

      
    case "PUT":
      try {
        const updateTodo = await todoModel.findByIdAndUpdate(
          req.query.id,
          req.body,
          { new: true }
        );

        res.status(200).json({
          success: true,
          message: updateTodo,
        });
      } catch (error) {
        console.log(error);
      }

    default:
      break;
  }
}
