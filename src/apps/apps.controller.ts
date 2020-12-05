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
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { UserEntity } from 'src/auth/User.entity';
import { ER_DUP_ENTRY } from 'src/constants/values';
import { User } from 'src/users/entities/user.entity';
import { AppsService } from './apps.service';
import { CreateAppDto } from './dto/create-app.dto';
import { UpdateAppDto } from './dto/update-app.dto';

@Controller('apps')
@UseGuards(AuthGuard())
export class AppsController {
  constructor(private readonly appsService: AppsService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async create(
    @Body() createAppDto: CreateAppDto,
    @GetUser() user: UserEntity,
  ) {
    try {
      const data = await this.appsService.create(createAppDto, user);

      return data;
    } catch (err) {
      if (err.code === ER_DUP_ENTRY) {
        throw new ConflictException();
      }
      throw new InternalServerErrorException();
    }
  }

  @Get()
  findAll(@GetUser() user: UserEntity) {
    return this.appsService.findAll(user);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateAppDto: UpdateAppDto) {
    return this.appsService.update(+id, updateAppDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.appsService.remove(id);
  }
}
