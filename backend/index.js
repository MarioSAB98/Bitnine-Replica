require('dotenv').config()
require('express-async-errors');
const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const dbConnect = require('./database/db');
const port = process.env.PORT;


/* importing routes */
const userRoute = require('./routes/user.router');



/* middleWares */
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use(morgan('dev'));
dbConnect();

/* routing */
app.use('/user', userRoute);

/* globalErrorHandling */
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        staus: statusCode,
        message: err.message || 'internal server error',
        errors: err.errors || []
    })

})

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
});