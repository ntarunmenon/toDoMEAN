const mongoose = require('mongoose');

module.exports = function (){
    mongoose.connect('mongodb://localhost/tasks', {
        autoReconnect: false,
        bufferMaxEntries: 0
    })
    .then(() => console.log('Connected'));
}