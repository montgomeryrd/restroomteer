const colors = require('colors');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const PORT = process.env.PORT || 8000;
const app = express();

// import routes
const authRoutes = require('./routes/auth');

// app middleware - Use Before App Routes
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
if (process.env.NODE_ENV === 'development') app.use(cors({origin: 'http://localhost:3000'}));

// middleware
app.use('/api', authRoutes);

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`.yellow);
});