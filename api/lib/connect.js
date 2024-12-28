import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to BlogDB");
  } catch (error) {
    console.log(error);
  }
};

export default connect;
