import Order from "../model/order.model.js";
import Book from "../model/book.model.js";

export const createOrder = async (req, res) => {
    try {
        const { userId, items, totalAmount } = req.body;
        
        if (!userId || !items || items.length === 0) {
            return res.status(400).json({ message: "Invalid order data" });
        }

        const newOrder = new Order({
            userId,
            items,
            totalAmount
        });

        // Decrement stock
        for (const item of items) {
            await Book.findByIdAndUpdate(item.bookId, {
                $inc: { availableQuantity: -item.quantity }
            });
        }

        const savedOrder = await newOrder.save();
        res.status(201).json({ message: "Order created successfully", order: savedOrder });
    } catch (error) {
        console.log("Error : ", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const getUserOrders = async (req, res) => {
    try {
        const { userId } = req.params;
        const orders = await Order.find({ userId }).sort({ createdAt: -1 });
        res.status(200).json(orders);
    } catch (error) {
        console.log("Error : ", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
