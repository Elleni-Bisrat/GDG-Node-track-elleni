import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("database connected");
  } catch (error) {
    console.log("databse error", error);
    process.exit(1);
  }
};
export default connectDB;
