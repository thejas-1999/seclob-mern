import express from "express";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import productRouter from "./routes/productRoutes.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 8000;
const mongoUri = process.env.MONGO_URI;

app.get("/", (req, res) => {
  res.send(`Hello world`);
});

app.use("/api/products", productRouter);
mongoose.connect(mongoUri).then(() => {
  console.log(`database is connected to mongodb`);
  app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
  });
});
