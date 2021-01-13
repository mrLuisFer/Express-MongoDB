import * as routesCtrl from "./routes.controller"

// Rutas
export default function getRoutes(app: any) {
  app.get("/", routesCtrl.getRoot)

  app.get("/home", routesCtrl.getPots)

  app.post("/home", routesCtrl.postPosts)

  app.get("/article/:id", routesCtrl.getArticle)

  app.delete("/article/:id", routesCtrl.deletePost)

  app.put("/article/:id", routesCtrl.putPost)
}
