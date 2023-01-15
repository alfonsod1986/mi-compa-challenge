import { ObjectSchema } from 'joi';
import { Request, Response, NextFunction } from 'express';
import CustomError from '../lib/CustomError';
import httpStatus from 'http-status';

export const schemaValidator = (schema: ObjectSchema) => (req: Request, res: Response, next: NextFunction) => {
  const { error } = schema.validate(req.body, { abortEarly: false });
  error ? next(new CustomError(error, httpStatus.BAD_REQUEST)) : next();
};
