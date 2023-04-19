import mongoose from "mongoose";

export const connectDatabase = async () => {
    try {
        const { connections } = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected: ${connections.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
};
