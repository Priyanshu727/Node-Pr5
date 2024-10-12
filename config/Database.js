const mongoose = require('mongoose');

const db = async () => {
    try {
        const uri = process.env.MONGO_URI;
        if (!uri) {
            throw new Error('MongoDB URI is not defined');
        }
        await mongoose.connect(uri);
        console.log('Database is connected');
    } catch (error) {
        console.log('Error connecting to database:', error);
    }
};

module.exports = db;
