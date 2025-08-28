import mongoose from 'mongoose';

const productItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  price: {
    type: String,
    required: true
  },
  image: {
    type: Array,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  subCategory: {
    type: String,
    required: true
  },
  sizes: {
    type: Array,
    required: true
  },
  bestseller: {
    type: Boolean
  },
  date: {
    type: Number,
    required: true
  }
});

const Product = mongoose.model('product', productItemSchema);

export default Product;