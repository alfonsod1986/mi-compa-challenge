import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';
import CustomError from '../lib/CustomError';

export const errorHandler = (err: CustomError, _req: Request, res: Response, _next: NextFunction) => {
  res.status(err.status || httpStatus.INTERNAL_SERVER_ERROR).send({
    success: false,
    name: err.name,
    message: err.message,
    statusCode: err.status || httpStatus.INTERNAL_SERVER_ERROR
  });
};
