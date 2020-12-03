import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { AudienceService } from './audience.service';
import { CreateAudienceDto } from './dto/create-audience.dto';
import { UpdateAudienceDto } from './dto/update-audience.dto';

@Controller('audience')
export class AudienceController {
  constructor(private readonly audienceService: AudienceService) {}

  @Post()
  create(@Body() createAudienceDto: CreateAudienceDto) {
    return this.audienceService.create(createAudienceDto);
  }

  @Get()
  findAll() {
    return this.audienceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.audienceService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateAudienceDto: UpdateAudienceDto) {
    return this.audienceService.update(+id, updateAudienceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.audienceService.remove(+id);
  }
}
