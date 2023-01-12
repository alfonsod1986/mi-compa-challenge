import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from './Controller';

export default class HealthCheckGetController implements Controller {
  async run(_req: Request, res: Response): Promise<void> {
    res.json({ status: 'OK' }).status(httpStatus.OK);
  }
}
