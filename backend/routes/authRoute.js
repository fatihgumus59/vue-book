import express from "express";
import * as authController from "../controller/authController.js";

const router = express.Router();

router.route('/register')
    .post(authController.register)

router.route('/login')
    .post(authController.login)

router.route('/:id')
    .get(authController.getAUser)
    .patch(authController.updateUser)
    .delete(authController.removeUser)


export default router;