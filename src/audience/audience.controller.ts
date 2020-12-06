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
import { AuthGuard } from '@nestjs/passport';
import { App } from 'src/apps/entities/app.entity';
import { GetApp } from 'src/apps/get-app.decorator';
import { AudienceService } from './audience.service';
import { CreateAudienceDto } from './dto/create-audience.dto';
import { UpdateAudienceDto } from './dto/update-audience.dto';

@Controller('/audiences')
@UseGuards(AuthGuard('app'))
export class AudienceController {
  constructor(private readonly audienceService: AudienceService) {}

  @Post()
  @UsePipes(ValidationPipe)
  create(
    @Body() createAudienceDto: CreateAudienceDto,
    @Param('appId') appId: string,
    @GetApp() app: App,
  ) {
    return this.audienceService.create(app, createAudienceDto);
  }

  @Get()
  findAll(@GetApp() app: App) {
    return this.audienceService.findAll(app);
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
