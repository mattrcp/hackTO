import mongoose from "mongoose";

const connectDB = async (uri, name) => {
  try {
    const db = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Connected to ${name} MongoDB 👍`);
    return db;
  } catch (err) {
    console.error(`Error connecting to ${name} MongoDB:`, err);
    throw err;
  }
};

const connectArticleDB = async () => {
  return await connectDB(process.env.MONGODB_URI_ARTICLE, "Article");
};

const connectEventDB = async () => {
  return await connectDB(process.env.MONGODB_URI_EVENT, "Event");
};

export { connectArticleDB, connectEventDB };
