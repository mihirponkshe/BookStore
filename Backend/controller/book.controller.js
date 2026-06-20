import Book from "../model/book.model.js";

export const getBook=async(req,res)=>{
    try {
        const book=await Book.find()
        res.status(200).json(book)
    } catch (error) {
        console.log("Error : ",error)
        res.status(500).json(error)
    }
}

export const createBook = async (req, res) => {
    try {
        const newBook = new Book(req.body);
        const savedBook = await newBook.save();
        res.status(201).json({ message: "Book created successfully", book: savedBook });
    } catch (error) {
        console.log("Error : ", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const updateBook = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedBook = await Book.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedBook) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.status(200).json({ message: "Book updated successfully", book: updatedBook });
    } catch (error) {
        console.log("Error : ", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const deleteBook = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedBook = await Book.findByIdAndDelete(id);
        if (!deletedBook) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.status(200).json({ message: "Book deleted successfully", book: deletedBook });
    } catch (error) {
        console.log("Error : ", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};