import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import bcryptjs from "bcryptjs";

export const test = (req, res) => {
  res.json({
    message: "API is working",
  });
};

// Update User:

export const updateUser = async (req, res, next) => {
  if (req.user.id !== req.params.id) {
    // return res.status(401).json("User not authorized!");
    return next(errorHandler(401, "User not authorized!"));
  }

  if (req.body.password) {
    req.body.password = bcryptjs.hashSync(req.body.password, 10);
  }

  const updatedUser = await User.findByIdAndUpdate(
    req.params.id,
    {
      /**
       * Use the dollar symbol to set the new body
       */
      $set: {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        profilePicture: req.body.profilePicture,
      },
    },
    { new: true }
  );

  /**
   * separate the password from what the user is getting from update
   */
  const { password, ...rest } = updatedUser._doc;
  res.status(200).json(rest);
  try {
  } catch (error) {
    next(error);
  }
};

// Delete User:
export const deleteUser = async (req, res, next) => {
  if (req.user.id !== req.params.id) {
    return next(
      errorHandler(401, "User not authorized! you can delete only your account")
    );
  }

  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted...");
  } catch (error) {
    next(error);
  }
};
