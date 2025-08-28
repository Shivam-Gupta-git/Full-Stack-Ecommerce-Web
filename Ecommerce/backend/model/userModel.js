import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, 'First Name is required']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Password is required']
  },
  cartData: {
    type: Object,
    default: {}
  }
}, { minimize: false });

const User = mongoose.model('User', userSchema);

export default User;