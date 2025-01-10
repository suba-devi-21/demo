const express = require('express');
const logger = require('./utils/logger');
const errorRoute = require('./utils/errorRoute');
const authRouter = require('./routes/authRoutes');



const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

 app.use(logger)

 
app.use("/auth",authRouter)



 app.use(errorRoute);

module.exports= app 