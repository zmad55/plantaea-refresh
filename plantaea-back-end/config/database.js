import mongoose from "mongoose";

export const connectDatabase = async () => {
    const connectionParameters =  {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };

    try {
        const { connections } = await mongoose.connect(process.env.MONGO_URI, connectionParameters);
        console.log(`MongoDB connected: ${connections.host}`);
    } catch (error) {
        console.log(error);
        console.log("Could not connect to MongoDB");
        process.exit(1)
    }
};
