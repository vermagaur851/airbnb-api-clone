import mongoose from "mongoose";
import DBName from "../constants/dbname";
const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/{DBName}`);
    console.log("MongoDB connected successfully !!!");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};
export default connectDB;