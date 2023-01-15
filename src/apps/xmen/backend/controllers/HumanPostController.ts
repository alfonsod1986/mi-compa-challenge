import { Request, Response, NextFunction } from 'express';
import container from '../di';
import httpStatus from 'http-status';
import { isMutant } from '../../../../contexts/xmen/humans/lib';
import CustomError from '../lib/CustomError';
import { Controller } from './Controller';

export class HumanPostController implements Controller {
  async run(req: Request, res: Response, next: NextFunction): Promise<any> {
    const { dna } = req.body;

    const isValid = isMutant(dna);

    const creator = container.get('Humans.application.Creator');

    await creator.run(dna, isValid);

    if (!isValid) {
      return next(new CustomError({ name: 'fordibben', message: 'Not mutant' }, httpStatus.FORBIDDEN));
    }

    res.json({
      success: true,
      message: 'Mutant',
      statusCode: 200
    });
  }
}
