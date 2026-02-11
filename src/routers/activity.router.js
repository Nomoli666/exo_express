import {Router} from 'express';
import activityController from '../controllers/activity.controller.js';

const activityRouter = Router();
activityRouter.get('/', activityController.listing);
activityRouter.get('/:id', activityController.details);

export default activityRouter;