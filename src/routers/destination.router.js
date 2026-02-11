import {Router} from 'express';
import destinationController from '../controllers/destination.controller.js';

const destinationRouter = Router();
destinationRouter.get('/', destinationController.listing);
destinationRouter.get('/:id', destinationController.details);

export default destinationRouter;
