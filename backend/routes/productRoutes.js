import express from "express";
import {
  addProduct,
  getAllProducts,
} from "../controllers/productcontroller.js";

const router = express.Router();

router.route("/addProduct").post(addProduct);
router.route("/getAllProducts").get(getAllProducts);

export default router;
