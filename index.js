const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const {otherError}= require('./middlewares/error')

const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')

const app = express();
const PORT = process.env.PORT || 3000;

const personController = require('./controllers/personController')

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", personController)
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(otherError);

app.listen(PORT, () => {
    console.log(`Port running on: ${PORT}`);
});