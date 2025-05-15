import Product from "../models/productModel.js";

// @desc   Add a new product
// @route  POST /api/products
// @access Public or Protected (as per your setup)
const addProduct = async (req, res) => {
  try {
    const { title, category, subCategory, description, images, variants } =
      req.body;

    // Validate required fields (basic check, mongoose will also validate)
    if (
      !title ||
      !category ||
      !subCategory ||
      !description ||
      !images ||
      !variants
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const product = new Product({
      title,
      category,
      subCategory,
      description,
      images,
      variants,
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find(); // You can add filters/sorting later
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export { addProduct, getAllProducts };
