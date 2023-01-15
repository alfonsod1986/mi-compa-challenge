import { XmenHuman } from '../domain/XmenHuman';
import { XmenHumanRepository } from '../domain/XmenHumanRepository';

export class XmenHumanCreator {
  constructor(private xmenHumanRepository: XmenHumanRepository) {}

  async run(dna: string[], isMutant: boolean): Promise<void> {
    const human = new XmenHuman(dna, isMutant);

    return this.xmenHumanRepository.save(human);
  }
}
