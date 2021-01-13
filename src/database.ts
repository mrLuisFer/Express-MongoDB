import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

const dbName: string | undefined = process.env.DB_NAME
const password: string | undefined = process.env.DB_PASSWORD
const user: string | undefined = process.env.DB_USER
const collection: string | undefined = process.env.DB_COLLECTION

export const connectToDb = async () => {
  const URL: string = `mongodb+srv://${user}:${password}@${collection}.mongodb.net/${dbName}?retryWrites=true&w=majority`
  try {
    const db = await mongoose.connect(`${URL}`, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      user: user,
      useFindAndModify: false,
    })

    console.log("mongodb connected")
    const collections = db.connection.collection("uDevBlog").collectionName
    console.log(`the collection is ${collections}`)
  } catch (error) {
    console.error(error)
  }
}
