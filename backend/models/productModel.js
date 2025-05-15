import mongoose from "mongoose";

const variantSchema = new mongoose.Schema({
  ram: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
  },
});

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ["Laptop", "Mobile Phone", "Tablet"],
      required: true,
    },
    subCategory: {
      type: String,
      enum: ["Apple", "Nokia", "Samsung"],
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      validate: [(arr) => arr.length === 3, "Exactly 3 images are required"],
      required: true,
    },
    variants: [variantSchema],
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
