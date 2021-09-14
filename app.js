require('dotenv').config();
const morgan = require('morgan');
const cors = require('cors');
const express = require('express')
const connection = require('./src/config/db.config');
const appRouter = require('./src/route/url')

const app = express()

app.use(
  express.json({
    extended: false,
  })
);

app.use(morgan('dev'));
app.use(cors({ optionsSuccessStatus: 200 }));

app.use(appRouter);

const port = process.env.PORT || 4000;

app.get('/', (req, res) => res.status(200).json({message: 'Welcome to Url Shortener Home Page'}))

connection.once('open', () => console.log('Database Connected!!'));
connection.on('error', () => console.log('Error'));

app.listen(port, ()=> console.log(`App listening on Port ${port}`));