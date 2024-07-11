import express from "express";
import signup from "../controller/auth.Controller.js";

const router = express.Router();

router.post("/signup", signup);

export default router;
