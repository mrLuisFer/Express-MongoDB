import { RequestHandler } from "express"

import Post from "../post.model"

// obtener un articulo por ids
export const getArticle: RequestHandler = async (req, res) => {
  console.log(req.params)
  const article = await Post.findById(req.params.id)
  if (!article) return res.status(404).json()
  return res.send(article)
}
