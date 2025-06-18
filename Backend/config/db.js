import mongoose from "mongoose";

const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connected DB");
  } catch (error) {
    console.log("connection failed", error);
    process.exit(1);
  }
};

export default connection;
