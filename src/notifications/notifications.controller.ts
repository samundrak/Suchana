import {
  Controller,
  Get,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateNotificationDTO } from './dto/create-notification-dto';

@Controller('notifications')
export class NotificationsController {
  @Post()
  @UsePipes(ValidationPipe)
  createTask(@Body() createTaskDto: CreateNotificationDTO) {
    console.log(createTaskDto);
    return [];
  }
  @Get()
  index() {
    return 'sa';
  }
}
