const swaggerAutogen = require("swagger-autogen")();

const outputFile = "./src/swagger.json";

const enpointsFiles = ["./src/routes/users.routes.ts"];

swaggerAutogen(outputFile, enpointsFiles);
