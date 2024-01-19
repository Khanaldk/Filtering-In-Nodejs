module.exports = {
  swaggerDefinition: {
    openapi: "3.0.1",
    info: {
      version: "1.0.0",
      title: "Filtering In Nodejs",
      description: "It retrieves records of user according to conditions.",
      servers: ["http://localhost:5000"],
    },
    components: {
      securitySchemes: {
        jwt: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },
  apis: ["routes/*.js"],
};
