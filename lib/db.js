import mongoose from "mongoose";

const connectMongo = async () => {
  const { connection } = await mongoose.connect(process.env.MONGODB_URI);

  if (connection.readyState) {
    console.log("Successfully connected to database!");
  }

  mongoose.set("debug", true);
};

connectMongo();
