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
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const AccessToken = await GenAccessToken({
      id: foundUser._id,
    });

    res.setHeader(
      "Set-Cookie",
      serialize("AccessToken", AccessToken, {
        path: "/",
        httpOnly: true,
      })
    );

    var user = {
      id: foundUser._id,
    };

    res.status(201).json({
      success: true,
      message: "User Login Successfully!",
    });
  } catch (error) {
    console.log(error);
  }
}
