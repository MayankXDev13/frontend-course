import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URL!
let isConnected = false

async function connectToDb() {
    if (isConnected) {
        console.log("Already connected to MongoDB");
        return
    }
    try {
        const db = await mongoose.connect(MONGODB_URI)
        isConnected = db.connections[0].readyState === 1
        console.log("Connected to MongoDB", db.connection.host);
    } catch (error) {
        console.log("Failed to connect to MongoDB", error);
        throw error
    }
}

export default connectToDb