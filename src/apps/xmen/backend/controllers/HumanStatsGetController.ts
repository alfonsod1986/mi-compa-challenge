import { Request, Response } from 'express';
import container from '../di';
import httpStatus from 'http-status';
import { Controller } from './Controller';

export default class HumanGetStatController implements Controller {
  async run(_req: Request, res: Response): Promise<void> {
    const stats = container.get('Humans.application.Stats');

    const results = await stats.run();
    res.json({ ...results }).status(httpStatus.OK);
  }
}
