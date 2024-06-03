const mongoose = require("mongoose")

const db = async () => {
    await mongoose.connect("mongodb+srv://priyanshumishra7272:12345@cluster0.oxk0bay.mongodb.net/Movie");
    console.log("Data base is connected");
}

module.exports = db;