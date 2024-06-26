import mongoose from "mongoose";

const connectArticleDB = async () => {
  try {
    const articleDB = await mongoose.connect(process.env.MONGODB_URI_ARTICLE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to Article MongoDB 👍");
    return articleDB;
  } catch (err) {
    console.error("Error connecting to Article MongoDB:", err);
    throw err;
  }
};

const connectEventDB = async () => {
  try {
    const eventDB = mongoose.createConnection(process.env.MONGODB_URI_EVENT, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to Event MongoDB 👍");
    return eventDB;
  } catch (err) {
    console.error("Error connecting to Event MongoDB:", err);
    throw err;
  }
};

export { connectArticleDB, connectEventDB };
