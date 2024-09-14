import express from "express";
import * as bookController from "../controller/bookController.js";

const router = express.Router();

router.route('/')
    .get(bookController.getAllBooks)
    .post(bookController.createABook)

router.route('/:id')
    .get(bookController.getABook)
    .patch(bookController.updateBook)
    .delete(bookController.removeBook)


export default router;