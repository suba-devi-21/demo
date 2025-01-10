// import express
const app = require('./app');
const mongoose = require('mongoose');
const { MONGODB_URI, PORT } = require('./utils/config');



mongoose.connect(MONGODB_URI)
.then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log('Server is running @ http://127.0.0.1:5000');
   });
}).catch((error) => {
    console.log('Error connecting to MongoDB', error);
});