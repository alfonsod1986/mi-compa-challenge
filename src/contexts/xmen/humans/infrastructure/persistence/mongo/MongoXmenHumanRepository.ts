import { MongoRepository } from '../../../../../shared/infrastructure/persistence/mongo/MongoRepository';
import { XmenHuman } from '../../../domain/XmenHuman';
import { XmenHumanRepository } from '../../../domain/XmenHumanRepository';

export class MongoXmenHumanRepository extends MongoRepository<XmenHuman> implements XmenHumanRepository {
  public save(human: XmenHuman): Promise<void> {
    return this.persist(human.id?.value, human);
  }

  protected collectionName(): string {
    return 'humans';
  }

  public async stats(): Promise<any> {
    const pipeline: any[] = [
      {
        $group: {
          _id: '$isMutat',
          count_mutant_dna: {
            $sum: {
              $cond: ['$isMutant', 1, 0]
            }
          },
          count_human_dna: {
            $sum: {
              $cond: ['$isMutant', 0, 1]
            }
          }
        }
      },
      {
        $addFields: {
          ratio: {
            $cond: [
              {
                $eq: ['$count_human_dna', 0]
              },
              0,
              {
                $divide: ['$count_mutant_dna', '$count_human_dna']
              }
            ]
          }
        }
      },
      {
        $project: {
          _id: 0,
          ratio: {
            $trunc: ['$ratio', 1]
          },
          count_mutant_dna: 1,
          count_human_dna: 1
        }
      }
    ];
    const stats = await this.aggregate(pipeline);
    const result = await stats.toArray();

    return result[0] ? result[0] : { count_mutant_dna: 0, count_human_dna: 0, ratio: 0.0 };
  }
}
