import { Injectable } from '@nestjs/common';
import { CreateAudienceDto } from './dto/create-audience.dto';
import { UpdateAudienceDto } from './dto/update-audience.dto';

@Injectable()
export class AudienceService {
  create(createAudienceDto: CreateAudienceDto) {
    return 'This action adds a new audience';
  }

  findAll() {
    return `This action returns all audience`;
  }

  findOne(id: number) {
    return `This action returns a #${id} audience`;
  }

  update(id: number, updateAudienceDto: UpdateAudienceDto) {
    return `This action updates a #${id} audience`;
  }

  remove(id: number) {
    return `This action removes a #${id} audience`;
  }
}
