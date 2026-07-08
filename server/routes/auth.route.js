import express from 'express';
import {googleAuth} from '../controllers/auth.controller.js'

const authRouter = express.Router();

authRouter.get('/google', googleAuth);
authRouter.post('/logout', logOut);


authRouter.post('/google', googleAuth);

export default authRouter;