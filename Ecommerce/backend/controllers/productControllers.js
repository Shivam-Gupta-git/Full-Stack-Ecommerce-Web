import Product from '../model/productModel.js'; // Adjust path as needed
import { v2 as cloudinary } from 'cloudinary';

export const addProduct = async (req, res) => {
  try {
    // Extract and parse data
    const name = req.body.name;
    const description = req.body.description;
    const price = req.body.price;
    const category = req.body.category;
    const subCategory = req.body.subCategory;
    const sizes = req.body.sizes ? JSON.parse(req.body.sizes) : [];
    const bestseller = req.body.bestseller === 'true';

    // Upload images to Cloudinary
    const files = [
      req.files.image1?.[0],
      req.files.image2?.[0],
      req.files.image3?.[0],
      req.files.image4?.[0]
    ].filter(Boolean); // Remove undefined entries

    const images = await Promise.all(
      files.map(file =>
        cloudinary.uploader.upload(file.path, {
          resource_type: 'image'
        }).then(result => result.secure_url)
      )
    );

    console.log(images)
    // Create new product
    const product = new Product({
      name,
      description,
      price,
      image: images,
      category,
      subCategory,
      sizes,
      bestseller,
      date: Date.now()
    });

    // Save to DB
    await product.save();

    res.json({ success: true, message: 'Product added successfully', product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Product can not added' });
  }
};

export const listProduct = async (req, res) => {
  try {
    const products = await Product.find({})
    res.json({ success: true, products })
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}

export const removeProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.body.id)
    res.json({ success: true, message: 'Product Remove' })
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}

export const singleProduct = async (req, res) => {
  try {
    const { productId } = req.body
    const singleItem = await Product.findById(productId)
    res.json({ success: true, singleItem })
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}
