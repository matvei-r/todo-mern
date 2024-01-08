const mongoose = require('mongoose'); 

const dataSchema = new mongoose.Schema({
    text: {
        required: true,
        type: String
    }, 
})

module.exports = mongoose.model('data', dataSchema); 