const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./controllers/personController.js']

swaggerAutogen(outputFile, endpointsFiles)