const mongoose = require('mongoose');

const dbConnect = () => {
    mongoose.connect('mongodb://localhost/myDatabase')
        .then(()=> console.log('db connected successfully'))
        .catch(err => console.log('db connection error:', err))
}

module.exports = dbConnect;