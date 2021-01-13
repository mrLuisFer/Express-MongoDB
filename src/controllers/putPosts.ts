import { RequestHandler } from "express"

import Post from "../post.model"

// Actualica un post
export const putPost: RequestHandler = async (req, res) => {
  const postUpdated = await Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  if (!postUpdated) return res.status(204).json()
  res.json(postUpdated)
}
