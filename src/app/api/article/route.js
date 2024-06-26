import { connectArticleDB } from "../../../libs/server";
import Article from "../../../models/article";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { title, description, author, link } = await req.json();

    // Connect to Article MongoDB
    await connectArticleDB();

    // Create the article
    const newArticle = await Article.create({
      title,
      description,
      author,
      link,
    });

    // Respond with success message
    return NextResponse.json(
      { message: "Article created successfully", article: newArticle },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating article:", error);
    return NextResponse.json(
      { error: "Failed to create article" },
      { status: 500 }
    );
  }
}

export async function GET() {
  await connectArticleDB();
  const article = await Article.find();
  return NextResponse.json({ article });
}
