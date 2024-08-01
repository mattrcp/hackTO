import { connectArticleDB } from "../../../../libs/server";
import Article from "../../../../models/article";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  const { id } = params;
  const {
    newTitle: title,
    newAuthor: author,
    newDescription: description,
    newLink: link,
  } = await req.json();
  await connectArticleDB();
  await Article.findByIdAndUpdate(id, { title, author, description, link });
  return NextResponse.json({ message: "Article updated" }, { status: 200 });
}

export async function GET(req, { params }) {
  const { id } = params;
  await connectArticleDB();
  const article = await Article.findOne({ _id: id });
  return NextResponse.json({ article }, { status: 200 });
}
