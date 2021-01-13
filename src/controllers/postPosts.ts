import { RequestHandler } from "express"

import Post from "../post.model"

// Crear un post
export const postPosts: RequestHandler = async (req, res) => {
  const post = new Post(req.body)

  console.log(post)

  const savedPost = await post.save()
  res.json(savedPost)
}
