const mongoose  = require('mongoose');

const registerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    streetAddress: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    postalCode: {
        type: Number,
        required: true
    },
    byEmail: {
        type: [String], 
        required: true, 
        enum: ['Comments', 'Candidates', 'Offers']
    },
    pushNotifications: {
        type: String, 
        required: true, 
        enum: ['Everything', 'Same as email', 'No push notification']
    }, 
},
    {
        timestamps: true
    }
)

module.exports = mongoose.model('registerSchema', registerSchema)