import {Router} from 'express';
import formController from '../controllers/form.controller.js';

const formRouter = Router();

formRouter.get('/', formController.index)
formRouter.get('/destination', formController.destination);
formRouter.get('/activity', formController.activity);

export default formRouter;