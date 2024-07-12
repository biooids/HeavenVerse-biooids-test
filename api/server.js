import express from "express";
import cors from "cors";

import mongoose from "mongoose";
import dotenv from "dotenv";
import songRouter from "./src/routes/songRoute.js";
import connectCloudinary from "./src/config/cloudinary.js";
dotenv.config();

//app config
const app = express();
const port = process.env.PORT || 3000;
connectCloudinary();
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("mongo db is connected");
  })
  .catch((err) => {
    console.log(err);
  });

//MIDDLE WARE
app.use(express.json());
app.use(cors());

//initializing routes

app.get("/", (req, res) => {
  res.send("API working");
});

app.use("/api/song", songRouter);

const server = app.listen(port, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log(`listening at http://${host}:${port}`);
});
