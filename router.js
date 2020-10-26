import express from "express";

export const userRouter = express.Router();

userRouter.get("/", (req, res) => res.send('user Index!'));
userRouter.get("/password", (req, res) => res.send('user password!'));

