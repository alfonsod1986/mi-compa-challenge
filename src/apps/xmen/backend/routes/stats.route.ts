import { Router } from 'express';
import container from '../di';

export const register = (router: Router) => {
  const controller = container.get('Apps.Xmen.Backend.controller.HumanStatsGetController');
  router.get('/stats', controller.run.bind(controller));
};
