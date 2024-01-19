import express from "express";
import { filterDataRoutes } from "./filterDataRoutes";
import { cheapItemRoutes } from "./cheapItemRoutes";
const routes = express.Router();

routes.use("/filter", filterDataRoutes);

// routes.use("/cheap-item", cheapItemRoutes);

routes.use("/cheap-item", cheapItemRoutes);
routes.use("/all", cheapItemRoutes);

export { routes };
