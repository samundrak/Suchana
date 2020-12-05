import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
  UseGuards,
} from '@nestjs/common';
import { OnlyAppsGuard } from 'src/guards/OnlyAppsGuard';
import { AudienceService } from './audience.service';
import { CreateAudienceDto } from './dto/create-audience.dto';
import { UpdateAudienceDto } from './dto/update-audience.dto';

@Controller('apps/:appId/audiences')
@UseGuards(OnlyAppsGuard)
export class AudienceController {
  constructor(private readonly audienceService: AudienceService) {}

  @Post()
  @UsePipes(ValidationPipe)
  create(
    @Body() createAudienceDto: CreateAudienceDto,
    @Param('appId') appId: string,
  ) {
    return this.audienceService.create(appId, createAudienceDto);
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
  update(
    @Param('id') id: string,
    @Body() updateAudienceDto: UpdateAudienceDto,
  ) {
    return this.audienceService.update(+id, updateAudienceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.audienceService.remove(+id);
  }
}
