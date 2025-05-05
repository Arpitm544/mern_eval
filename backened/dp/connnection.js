const mongoose = require('mongoose');
require('dotenv').config();

let mongoUrl = process.env.MONGO_URL;
console.log('MongoDB URL:', mongoUrl);

const connectToDatabase = async () => {
    try {
        await mongoose.connect(mongoUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 30000, // 30 seconds
        });
        console.log('Connected to Database!');
    } catch (error) {
        console.error('Error connecting to the database:', error);
        
    }
};

connectToDatabase();