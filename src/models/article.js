import mongoose from "mongoose";

const { Schema } = mongoose;

const articleSchema = new Schema(
  {
    title: String,
    author: String,
    description: String,
    link: String,
  },
  {
    timestamps: true,
  }
);

const Article =
  mongoose.models.Article || mongoose.model("Article", articleSchema);

export default Article;
