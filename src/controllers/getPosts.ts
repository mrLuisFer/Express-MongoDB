import { RequestHandler } from "express"
import Post from "../post.model"

// Obtener posts
export const getPots: RequestHandler = async (req, res) => {
  try {
    const postData = await Post.find()
    return res.json(postData)
  } catch (error) {
    res.json({ error: error })
  }
}
