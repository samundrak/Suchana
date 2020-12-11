import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { App } from 'src/modules/apps/entities/app.entity';
import { GetApp } from 'src/modules/apps/get-app.decorator';
import { AudienceChannelService } from './audience-channel.service';
import { CreateAudienceChannelDto } from './dto/create-audience-channel.dto';
import { UpdateAudienceChannelDto } from './dto/update-audience-channel.dto';

@Controller('audience/:audienceId/channels')
@UseGuards(AuthGuard('app'))
export class AudienceChannelController {
  constructor(
    private readonly audienceChannelService: AudienceChannelService,
  ) {}

  @Post()
  @UsePipes(ValidationPipe)
  create(
    @Body() createAudienceChannelDto: CreateAudienceChannelDto,
    @GetApp() app: App,
    @Param('audienceId') audienceId: string,
  ) {
    return this.audienceChannelService.create(
      createAudienceChannelDto,
      audienceId,
      app,
    );
  }

  @Get()
  findAll() {
    return this.audienceChannelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.audienceChannelService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateAudienceChannelDto: UpdateAudienceChannelDto,
  ) {
    return this.audienceChannelService.update(+id, updateAudienceChannelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.audienceChannelService.remove(+id);
  }
}
