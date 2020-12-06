import { EntityRepository, Repository } from 'typeorm';
import { ContactModes } from '../entities/contact-modes.entity';

@EntityRepository(ContactModes)
export class ContactModesRepository extends Repository<ContactModes> {}
