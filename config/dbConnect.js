const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        mongoose.set("strictQuery", false);
        await mongoose.connect("mongodb://localhost:27017/Blog");
    } catch (err) {
        console.log(err);
    }
}

module.exports = connectDB;