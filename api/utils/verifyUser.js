import jwt from "jsonwebtoken";
import { errorHandler } from "./error.js";

/***
 * We need cookie parser in our app to parse cookie
 * which we need for user verification.
 * then we use the verify token we created here in the update route.
 */

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token)
    return next(errorHandler(401, "Access denied! Not authenticated"));

  jwt.verify(token, process.env.JWT_SECRETE, (err, user) => {
    if (err) return next(errorHandler(403, "Invalid token"));

    req.user = user;
    next();
  });
};
