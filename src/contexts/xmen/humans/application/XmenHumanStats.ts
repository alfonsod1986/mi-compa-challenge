import { XmenHumanRepository } from '../domain/XmenHumanRepository';

export class XmenHumanStats {
  constructor(private xmenHumanRepository: XmenHumanRepository) {}

  async run(): Promise<any> {
    return await this.xmenHumanRepository.stats();
  }
}
