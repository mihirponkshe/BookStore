import mongoose from "mongoose";
import dotenv from "dotenv";
import Book from "./model/book.model.js";

dotenv.config();

const URI = process.env.MongoDBURI || "mongodb://127.0.0.1:27017/bookStore";

const dummyBooks = [
  {
    name: "The Midnight Library",
    price: 15.99,
    category: "Fiction",
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1602190253i/52578297.jpg",
    title: "A novel about choices and regrets",
    author: "Matt Haig",
    description: "Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived.",
    rating: 4.8,
    availableQuantity: 15
  },
  {
    name: "Atomic Habits",
    price: 19.99,
    category: "Non-Fiction",
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1655988385i/40121378.jpg",
    title: "An Easy & Proven Way to Build Good Habits",
    author: "James Clear",
    description: "No matter your goals, Atomic Habits offers a proven framework for improving--every day. James Clear, one of the world's leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.",
    rating: 4.9,
    availableQuantity: 30
  },
  {
    name: "Dune",
    price: 12.50,
    category: "Sci-Fi",
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1555447414i/44767458.jpg",
    title: "Epic science fiction masterpiece",
    author: "Frank Herbert",
    description: "Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world where the only thing of value is the 'spice' melange.",
    rating: 4.7,
    availableQuantity: 8
  },
  {
    name: "JavaScript: The Good Parts",
    price: 25.00,
    category: "Technology",
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1328830222i/2998152.jpg",
    title: "Unearthing the Excellence in JavaScript",
    author: "Douglas Crockford",
    description: "Most programming languages contain good and bad parts, but JavaScript has more than its share of the bad, having been developed and released in a hurry. This book scrapes away these bad features to reveal a subset of JavaScript that's more reliable, readable, and maintainable.",
    rating: 4.5,
    availableQuantity: 5
  },
  {
    name: "The Pragmatic Programmer",
    price: 35.50,
    category: "Technology",
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1401432508i/4099.jpg",
    title: "Your journey to mastery",
    author: "David Thomas, Andrew Hunt",
    description: "The Pragmatic Programmer is one of those rare tech books you'll read, re-read, and read again over the years. Whether you're new to the field or an experienced practitioner, you'll come away with fresh insights each and every time.",
    rating: 4.9,
    availableQuantity: 12
  },
  {
    name: "The Alchemist",
    price: 0,
    category: "Free",
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654371463i/18144590.jpg",
    title: "A Fable About Following Your Dream",
    author: "Paulo Coelho",
    description: "Paulo Coelho's enchanting novel has inspired a devoted following around the world. This story, dazzling in its powerful simplicity and inspiring wisdom, is about an Andalusian shepherd boy named Santiago who travels from his homeland in Spain to the Egyptian desert in search of a treasure.",
    rating: 4.6,
    availableQuantity: 100
  },
  {
    name: "Project Hail Mary",
    price: 18.00,
    category: "Sci-Fi",
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1597695864i/54493401.jpg",
    title: "A lone astronaut must save the earth",
    author: "Andy Weir",
    description: "Ryland Grace is the sole survivor on a desperate, last-chance mission—and if he fails, humanity and the earth itself will perish. Except that right now, he doesn't know that. He can't even remember his own name.",
    rating: 4.8,
    availableQuantity: 22
  },
  {
    name: "Think Again",
    price: 16.50,
    category: "Non-Fiction",
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1611776510i/55539565.jpg",
    title: "The Power of Knowing What You Don't Know",
    author: "Adam Grant",
    description: "Intelligence is usually seen as the ability to think and learn, but in a rapidly changing world, there's another set of cognitive skills that might matter more: the ability to rethink and unlearn.",
    rating: 4.7,
    availableQuantity: 18
  },
  {
    name: "Clean Code",
    price: 40.00,
    category: "Technology",
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1436202607i/3735293.jpg",
    title: "A Handbook of Agile Software Craftsmanship",
    author: "Robert C. Martin",
    description: "Even bad code can function. But if code isn't clean, it can bring a development organization to its knees. Every year, countless hours and significant resources are lost because of poorly written code.",
    rating: 4.6,
    availableQuantity: 0
  },
  {
    name: "1984",
    price: 0,
    category: "Free",
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1348990566i/5470.jpg",
    title: "A novel by George Orwell",
    author: "George Orwell",
    description: "Among the seminal texts of the 20th century, Nineteen Eighty-Four is a rare work that grows more haunting as its futuristic purgatory becomes more real.",
    rating: 4.8,
    availableQuantity: 50
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Connected to MongoDB for seeding...");

    await Book.deleteMany({});
    console.log("Cleared existing books.");

    await Book.insertMany(dummyBooks);
    console.log("Successfully inserted dummy books!");

    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

seedDB();
