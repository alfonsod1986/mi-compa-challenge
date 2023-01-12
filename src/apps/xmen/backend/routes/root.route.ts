import { Express } from 'express';
import container from '../di';
import RootController from '../controllers/RootGetController';

export const register = (app: Express) => {
  const controller: RootController = container.get('Apps.Xmen.Backend.controllers.RootGetController');
  app.get('/', controller.run.bind(controller));
};
