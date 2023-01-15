import { AggregateRoot } from '../../../shared/domain/AggregateRoot';
import { XmenHumanId } from './value-object/XmenHumanId';

export class XmenHuman extends AggregateRoot {
  readonly id?: XmenHumanId;
  readonly dna: string[];
  readonly isMutant: boolean;

  constructor(dna: string[], isMutant: boolean, id?: XmenHumanId) {
    super();
    this.id = id ? id : XmenHumanId.random();
    this.dna = dna;
    this.isMutant = isMutant;
  }

  static create(dna: string[], isMutant: boolean, id?: XmenHumanId): XmenHuman {
    return new XmenHuman(dna, isMutant, id);
  }

  static fromPrimitives(plainData: { dna: string[]; isMutant: boolean; id: string }): XmenHuman {
    return new XmenHuman(plainData.dna, plainData.isMutant, new XmenHumanId(plainData.id));
  }

  toPrimitives() {
    return {
      id: this.id?.value,
      dna: this.dna,
      isMutant: this.isMutant
    };
  }
}
