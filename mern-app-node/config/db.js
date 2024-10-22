import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connection has been set up with ${conn}`);
    }
    catch (err) {
        console.log(`Error in connecting with the database ${err}`);
    }
}

export default connectDB;