import express, { Router, Express } from "express"
const app: Express = express()
const router: Router = Router()
import morgan from "morgan"
import routes from "./routes"
import { connectToDb } from "./database"
import cors from "cors"

connectToDb()

app.set("port", 3000)
const port = app.get("port")

app.use(morgan("dev"))

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.listen(port, (): void => {
  console.log("Server on port", port)
})

// Rutas
routes(app)
