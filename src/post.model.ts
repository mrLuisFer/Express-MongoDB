import { Schema, model } from "mongoose"

const Post = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    img: {
      type: String,
      trim: true,
    },
    categories: {
      type: Array,
      trim: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

export default model("posts", Post)
