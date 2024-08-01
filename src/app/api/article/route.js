import { connectArticleDB } from "../../../libs/server";
import Article from "../../../models/article";
import { NextResponse } from "next/server";

const setCORSHeaders = (response) => {
  response.headers.set(
    "Access-Control-Allow-Origin",
    "https://www.trioto.club"
  );
  response.headers.set(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  response.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );
  return response;
};

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
    const response = NextResponse.json(
      { message: "Article created successfully", article: newArticle },
      { status: 201 }
    );
    return setCORSHeaders(response);
  } catch (error) {
    console.error("Error creating article:", error);
    const response = NextResponse.json(
      { error: "Failed to create article" },
      { status: 500 }
    );
    return setCORSHeaders(response);
  }
}

export async function GET() {
  try {
    await connectArticleDB();
    const articles = await Article.find();
    const response = NextResponse.json({ articles });
    return setCORSHeaders(response);
  } catch (error) {
    console.error("Error fetching articles:", error);
    const response = NextResponse.json(
      { error: "Failed to fetch articles" },
      { status: 500 }
    );
    return setCORSHeaders(response);
  }
}

export async function DELETE(req) {
  const id = req.nextUrl.searchParams.get("id");
  await connectArticleDB();
  await Article.findByIdAndDelete(id);
  return NextResponse.json(
    { message: "Article deleted successfully" },
    { status: 200 }
  );
}

export async function OPTIONS() {
  const response = new NextResponse(null, { status: 204 });
  return setCORSHeaders(response);
}
