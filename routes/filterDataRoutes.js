import express from "express";
import { filterDataController } from "../controllers/filterDataController";
const filterDataRoutes = express.Router();

/**
 * @swagger
 * /filter/data:
 *   get:
 *     summary: Retrieve User
 *     security:
 *       - jwt: []
 *     tags: [User]
 *     parameters:
 *      - in: query
 *        name: name
 *        schema:
 *          type: string
 *          required: false
 *          description: User's name
 *      - in: query
 *        name: age
 *        schema:
 *          type: integer
 *          required: false
 *          description: User's age
 *     responses:
 *      200:
 *          description: User retrieved successfully
 *      500:
 *          description: Some Server Error
 */
filterDataRoutes.get("/data", filterDataController.filterdata);
// filterDataRoutes.post("/data", filterDataController.postData);

/**
 * @swagger
 * /filter/byPageId:
 *   get:
 *     summary: Retrieve User
 *     security:
 *       - jwt: []
 *     tags: [User]
 *     parameters:
 *      - in: query
 *        name: page
 *        schema:
 *          type: integer
 *          required: true
 *          description: User's Id
 *      - in: query
 *        name: list
 *        schema:
 *          type: integer
 *          required: true
 *          description: Browser's page
 *     responses:
 *      200:
 *          description: User retrieved successfully
 *      500:
 *          description: Some Server Error
 */
filterDataRoutes.get("/byPageId", filterDataController.filterdataByPageAndId);

// filterDataRoutes.post("/", filterDataController.getfilterData);

export { filterDataRoutes };
