import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const mongo = await mongoose.connect(process.env.MONGO_URL);
    if (mongo) {
      console.log(`Connect DataBase${mongo.connection.host}`);
    } else {
      console.log("dnot connected");
    }
  } catch (error) {
    console.log(error);
  }
};
export default connectDB;
