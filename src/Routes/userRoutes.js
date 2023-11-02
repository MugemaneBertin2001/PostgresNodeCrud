import express from "express";
import { createUser, deleteSingleUser, getSingleUser, getUsers, updateUser } from "../Controller/userController";

const userRoutes = express.Router();
userRoutes
    .post("/signup", createUser)
    .get("/users", getUsers);
userRoutes
    .get("/users/:id",  getSingleUser)
    .delete("/users/:id", deleteSingleUser)
    .put("/users/:id", updateUser)

export default userRoutes;
