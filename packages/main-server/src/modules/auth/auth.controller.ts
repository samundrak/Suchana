import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthCredentialsDto } from './auth-credentials.dto';
import { AuthService } from './auth.service';
import { GetUser } from './get-user.decorator';
import { UserEntity } from './User.entity';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('/login')
  async login(@Body() auth: AuthCredentialsDto) {
    return this.authService.login(auth);
  }
  @UsePipes(ValidationPipe)
  @Post('/register')
  async register(@Body() auth: AuthCredentialsDto) {
    return this.authService.signUp(auth);
  }

  @Get('/me')
  @UseGuards(AuthGuard())
  async me(@GetUser() user: UserEntity) {
    return {
      username: user.username,
      id: user.id,
    };
  }
}
