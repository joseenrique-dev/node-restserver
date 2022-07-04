const mongoose = require('mongoose');

const dbConnection = async() =>{
    try {
        await mongoose.connect(process.env.MONGODB_CNN);

        console.log('MongoDB Connected');

    } catch (error) {
        console.log(error);
        throw new Error('Error connecting to database');
    }
}

module.exports = {
    dbConnection
};  