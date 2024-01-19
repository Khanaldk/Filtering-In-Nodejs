import express from "express";
import { cheapItemController } from "../controllers/cheapItemController";
const cheapItemRoutes = express.Router();

// cheapItemRoutes.post("/create", cheapItemController.postItem);

/**
 * @swagger
 * /all/item:
 *   get:
 *     summary: Retrieve All Product details
 *     security:
 *       - jwt: []
 *     tags: [Product]
 *     responses:
 *      200:
 *          description: All Product Item retrieved successfully
 *      500:
 *          description: Some Server Error
 */

cheapItemRoutes.get("/item", cheapItemController.findAllItem);

/**
 * @swagger
 * /cheap-item:
 *   get:
 *     summary: Retrieve Product details
 *     security:
 *       - jwt: []
 *     tags: [Product]
 *     parameters:
 *      - in: query
 *        name: cheapItem
 *        schema:
 *          type: integer
 *          required: false
 *          description: Product's cheapItem
 *     responses:
 *      200:
 *          description: Product cheap Item retrieved successfully
 *      500:
 *          description: Some Server Error
 */

cheapItemRoutes.get("/", cheapItemController.getCheapItem);

export { cheapItemRoutes };
