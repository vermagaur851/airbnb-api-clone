import mongoose from "mongoose";
import {DBNAme} from "../constants/dbname.js";
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully !!!");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};
export default connectDB;