import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactModesService } from './contact-modes.service';
import { AudienceContactModeRepository } from './repository/audience-contact-mode.repository';
import { ContactModesRepository } from './repository/contact-modes.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      AudienceContactModeRepository,
      ContactModesRepository,
    ]),
  ],
  providers: [ContactModesService],
})
export class ContactModesModule {}
