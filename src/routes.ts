import { Express, Router } from "express"
import * as controller from "./controllers/_index"

// Rutas
export default function getRoutes(app: Express): void {
  app.get("/", controller.getRoot)

  app.get("/home", controller.getPots)

  app.post("/home", controller.postPosts)

  app.get("/article/:id", controller.getArticle)

  app.delete("/article/:id", controller.deletePost)

  app.put("/article/:id", controller.putPost)
}
