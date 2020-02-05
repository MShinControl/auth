const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const localRouter = require('./routes/localRouter');

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', localRouter);

module.exports = app;