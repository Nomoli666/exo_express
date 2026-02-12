import {Router} from 'express';
import formController from '../controllers/form.controller.js';

const formRouter = Router();

formRouter.get('/', formController.index)

export default formRouter;