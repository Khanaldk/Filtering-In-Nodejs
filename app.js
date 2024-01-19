import express from "express";
import dotenv from "dotenv";
import { routes } from "./routes/index";
import swaggeruiexpress from "swagger-ui-express";
import swaggerjs from "swagger-jsdoc";
import swaggerDocs from "./docs/swaggerDocs";
dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", routes);
app.use(
  "/api-docs",
  swaggeruiexpress.serve,
  swaggeruiexpress.setup(swaggerjs(swaggerDocs))
);

app.listen(port, () => {
  console.log(`Listening to port ${port}.`);
});
