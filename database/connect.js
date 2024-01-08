const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_CONNECTION_URI)
        console.log("Connected to MongoDB")
    }catch(error) {
        next(error)
    }
}

module.exports = connectDB 