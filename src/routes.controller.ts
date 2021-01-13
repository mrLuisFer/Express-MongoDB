import { RequestHandler } from "express"

import Post from "./post.model"

export const getRoot: RequestHandler = (req, res) => {
  res.json({ message: "Server is correct", links: ["/home", "/articles/:id"] })
}

// Crear un post
export const postPosts: RequestHandler = async (req, res) => {
  const post = new Post(req.body)

  console.log(post)

  const savedPost = await post.save()
  res.json(savedPost)
}

// Obtener posts
export const getPots: RequestHandler = async (req, res) => {
  try {
    const postData = await Post.find()
    return res.json(postData)
  } catch (error) {
    res.json({ error: error })
  }
}

// obtener un articulo por ids
export const getArticle: RequestHandler = async (req, res) => {
  console.log(req.params)
  const article = await Post.findById(req.params.id)
  if (!article) return res.status(404).json()
  return res.send(article)
}

// Eliminando el post
export const deletePost: RequestHandler = async (req, res) => {
  console.log(req.params)
  const article = await Post.findByIdAndDelete(req.params.id)
  if (!article) return res.status(204).json({ post: "no founded" })
  return res.send(article)
}

// Actualica un post
export const putPost: RequestHandler = async (req, res) => {
  const postUpdated = await Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  if (!postUpdated) return res.status(204).json()
  res.json(postUpdated)
}
