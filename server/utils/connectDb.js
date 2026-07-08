import mangoose from "mongoose";

const connectDb =  async () => {
    try {
        await mangoose.connect(process.env.MONGODB_URL);
    } catch (error) {
        console.log("Error while connecting to database", error.message);
    }
}
export default connectDb;