import express from "express";
import * as bookController from "../controller/bookController.js";
import * as authMiddleware from "../middlewares/auth.js";

const router = express.Router();

router.route('/')
    .get(bookController.getAllBooks)
    .post(authMiddleware.authenticateUser,bookController.createABook)

router.route('/:id')
    .get(bookController.getABook)
    .patch(authMiddleware.authenticateUser,bookController.updateBook)
    .delete(authMiddleware.authenticateUser,bookController.removeBook)


export default router;