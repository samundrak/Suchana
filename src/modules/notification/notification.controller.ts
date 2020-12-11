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
import { NotificationService } from './notification.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { GetApp } from 'src/modules/apps/get-app.decorator';
import { App } from 'src/modules/apps/entities/app.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('notifications')
@UseGuards(AuthGuard('app'))
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post()
  @UsePipes(ValidationPipe)
  create(
    @Body() createNotificationDto: CreateNotificationDto,
    @GetApp() app: App,
  ) {
    console.log(createNotificationDto);
    return this.notificationService.create(createNotificationDto, app);
  }

  @Get()
  findAll() {
    return this.notificationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.notificationService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateNotificationDto: UpdateNotificationDto,
  ) {
    return this.notificationService.update(+id, updateNotificationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.notificationService.remove(+id);
  }
}
