import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from './Controller';

export default class RootGetController implements Controller {
  async run(_req: Request, res: Response): Promise<void> {
    res
      .json({
        title: 'Mi Compa Challenge - Xmen API',
        version: '1.0.0'
      })
      .status(httpStatus.OK);
  }
}
