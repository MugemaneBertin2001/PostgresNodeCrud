import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";

import userRoutes from "./Routes/userRoutes";

const app = express();
dotenv.config();

// configuration

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/postgres", userRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    author: "They CallMe The Saint",
    message: "Welcome to the Postgres API",
  });
});

export default app;
