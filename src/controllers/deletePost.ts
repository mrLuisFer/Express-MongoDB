import { RequestHandler } from "express"

import Post from "../post.model"

// Eliminando el post
export const deletePost: RequestHandler = async (req, res) => {
  console.log(req.params)
  const article = await Post.findByIdAndDelete(req.params.id)
  if (!article) return res.status(204).json({ post: "no founded" })
  return res.send(article)
}
