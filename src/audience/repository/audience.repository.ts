import { EntityRepository, Repository } from 'typeorm';
import { Audience } from '../entities/audience.entity';

@EntityRepository(Audience)
export class AudienceRepository extends Repository<Audience> {}
