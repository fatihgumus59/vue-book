import express from "express";
import * as userController from "../controller/userController.js";

const router = express.Router();

router.route('/register')
    .post(userController.register)

router.route('/login')
    .post(userController.login)

router.route('/:id')
    .get(userController.getAUser)
    .patch(userController.updateUser)
    .delete(userController.removeUser)


export default router;