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
import { v4 as uuidv4 } from 'uuid';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { NotificationCreatedEvent } from './events/NotificationCreatedEvent';

@Controller('notifications')
@UseGuards(AuthGuard('app'))
export class NotificationController {
  constructor(
    private eventEmitter: EventEmitter2,
    private readonly notificationService: NotificationService,
  ) {}

  @Post()
  @UsePipes(ValidationPipe)
  create(
    @Body() createNotificationDto: CreateNotificationDto,
    @GetApp() app: App,
  ) {
    const nextNotificationId = uuidv4();
    this.eventEmitter.emit(NotificationCreatedEvent.EVENT_NAME, {
      notification: { ...createNotificationDto, id: nextNotificationId },
      app: { id: app.id },
    });
    createNotificationDto.id = nextNotificationId;
    return {
      id: nextNotificationId,
    };
    // return this.notificationService.create(createNotificationDto, app);
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
