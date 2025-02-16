import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const connectionMongo = process.env.MONGODB_URI

export const connection = async () => {
    try {
        await mongoose.connect(connectionMongo);
        console.log("Database connected")
    } catch (ex) {
        console.log("An error has ocurred: ", ex)
    }
}