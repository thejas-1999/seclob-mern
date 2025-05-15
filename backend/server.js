import express from "express";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

const app = express();

const port = process.env.PORT || 8000;
const mongoUri = process.env.MONGO_URI;

app.get("/", (req, res) => {
  res.send(`Hello world`);
});

mongoose.connect(mongoUri).then(() => {
  console.log(`database is connected to mongodb`);
  app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
  });
});
