import express from 'express'
import {signInController} from '../controller/signinController.js';
import { logInController } from '../controller/loginController.js';
const UserRoute =express.Router();

UserRoute.post('/signin',signInController);
UserRoute.post('/login',logInController);

export default UserRoute

