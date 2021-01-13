import { RequestHandler } from "express"

export const getRoot: RequestHandler = (req, res) => {
  res.json({ message: "Server is correct", links: ["/home", "/articles/:id"] })
}
