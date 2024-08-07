import bcrypt from "bcrypt";
import usersModel from "@/models/users";
import dbConnect from "@/config/dbConnect";

export default async function handler(req, res) {
  dbConnect();

  switch (req.method) {
    case "POST":
      try {
        const { fullName, email, username, password } = req.body;

        if (!fullName || !email || !username || !password) {
          return res.status(400).json({
            success: false,
            message: "Please fill in all fields 🤦‍♀️",
          });
        }

        // conver user password to hash
        const hasedPassword = await bcrypt.hash(req.body.password, 10);

        const addUser = await usersModel.create({
          ...req.body,
          password: hasedPassword,
        });
        res.status(200).json({
          success: true,
          message: "User Added Successfully😍",
          addUser,
        });
      } catch (error) {
        console.log(error);
      }

      break;

    default:
      break;
  }
}
