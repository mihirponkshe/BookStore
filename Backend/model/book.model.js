import mongoose from "mongoose";

const bookSchema=mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    image:String,
    title:String,
    author: { type: String, default: "Unknown Author" },
    description: { type: String, default: "No description available." },
    rating: { type: Number, default: 0 },
    availableQuantity: { type: Number, default: 10 }
})

const Book=mongoose.model("Book",bookSchema);

export default Book;