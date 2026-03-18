import { NextResponse } from "next/server";
import Post from "@/posts/Post";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const sort = searchParams.get("sort") || "recent";

  let posts;

  if (sort === "top") {
    posts = await Post.find().sort({ upvotes: -1 });
  } else if (sort === "controversial") {
    posts = await Post.find().sort({
      upvotes: -1,
      downvotes: -1,
    });
  } else {
    // recent (default)
    posts = await Post.find().sort({ createdAt: -1 });
  }

  return NextResponse.json(posts);
}
