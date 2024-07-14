import express from "express";
import cors from "cors";

import "dotenv/config";
import songRouter from "./src/routes/songRoute.js";
import connectCloudinary from "./src/config/cloudinary.js";
import connectDB from "./src/config/mongodb.js";

// App config
const app = express();
const port = process.env.PORT || 3000;
connectCloudinary();
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Initialize routes
app.use("/api/song", songRouter);

const server = app.listen(port, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log(`listening at http://${host}:${port}`);
});
