import express from "express";
import * as bookController from "../controller/bookController.js";

const router = express.Router();

router.route('/').get(bookController.getAllBooks)
router.route('/').post(bookController.create)


export default router;