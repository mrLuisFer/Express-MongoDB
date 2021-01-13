import express from "express"
const app = express()
// const router = express.Router()
import morgan from "morgan"

import { connectToDb } from "./database"
connectToDb()

import cors from "cors"

app.set("port", 3000)
const port = app.get("port")

app.use(morgan("dev"))

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.listen(port, () => {
  console.log("Server on port", port)
})

// Rutas
import routes from "./routes"
routes(app)
