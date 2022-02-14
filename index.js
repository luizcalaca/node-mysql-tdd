const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const errorMiddleware = require('./middlewares/error')

const app = express();
const PORT = process.env.PORT || 3000;

const personController = require('./controllers/personController')

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", personController)
app.use(errorMiddleware);

app.listen(PORT, () => {
    console.log(`Port running on: ${PORT}`);
});