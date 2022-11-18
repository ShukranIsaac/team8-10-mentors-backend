const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger.json'
const endpointsFiles = ['./src/routes/index']

swaggerAutogen(outputFile, endpointsFiles)