import { EntityRepository, Repository } from 'typeorm';
import { AudienceContactMode } from '../entities/audience-contact-mode.entity';

@EntityRepository(AudienceContactMode)
export class AudienceContactModeRepository extends Repository<
  AudienceContactMode
> {}
