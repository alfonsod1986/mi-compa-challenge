import { Router } from 'express';
import container from '../di';
import { errorHandler } from '../middlewares/error-handler';
import { schemaValidator } from '../middlewares/schema-validator';
import humanSchemaValidator from '../validators/human.schema.validator';

export const register = (router: Router) => {
  const controller = container.get('Apps.Xmen.Backend.controller.HumanPostController');
  router.post('/mutant', schemaValidator(humanSchemaValidator), controller.run.bind(controller), errorHandler);
};
