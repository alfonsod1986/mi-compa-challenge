import { Express } from 'express';
import container from '../di';
import HealthCheckController from '../controllers/HealthCheckGetController';

export const register = (app: Express) => {
  const controller: HealthCheckController = container.get('Apps.Xmen.Backend.controllers.HealthCheckGetController');
  app.get('/healthcheck', controller.run.bind(controller));
};
