import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './auth-credentials.dto';
import { IJWTPayload } from './interfaces/IJWTPayload';
import { UserRepository } from './User.repository';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepo: UserRepository,
    private jwtService: JwtService,
  ) {}

  async signUp(authCredentialsDto: AuthCredentialsDto) {
    return await this.userRepo.signUp(authCredentialsDto);
  }

  async login(
    loginCredentials: AuthCredentialsDto,
  ): Promise<{
    accessToken: string;
  }> {
    const user = await this.userRepo.validatePassword(loginCredentials);
    if (!user) {
      throw new UnauthorizedException();
    }
    const accessToken = await this.jwtService.sign(user);
    return {
      accessToken,
    };
  }
}
