import bcrypt from "bcrypt";
import usersModel from "@/models/users";
import dbConnect from "@/config/dbConnect";
import { GenAccessToken } from "@/helpers/jwt";
import { serialize } from "cookie";

export default async function handler(req, res) {
  dbConnect();

  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all fields 🤦‍♀️",
      });
    }

    const foundUser = await usersModel.findOne({ email });

    if (!foundUser) {
        res.status(400).json({
          success: false,
          message: "Invalid email or password",
        });
        return;
      }
  

  } catch (error) {
    console.log(error);
  }
}
