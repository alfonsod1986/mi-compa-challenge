import { XmenHuman } from './XmenHuman';

export interface XmenHumanRepository {
  save(human: XmenHuman): Promise<void>;
  stats(): Promise<any>;
}
