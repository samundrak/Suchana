import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { SECRET } from 'src/constants/values';
import { jwtSessionConfig } from 'src/utils/configs';
import { IJWTPayload } from './interfaces/IJWTPayload';
import { UserEntity } from './User.entity';
import { UserRepository } from './User.repository';

@Injectable()
export class JWTStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: jwtSessionConfig(SECRET),
    });
  }

  async validate(payload: IJWTPayload): Promise<UserEntity> {
    const { username } = payload;
    const user = this.userRepository.findOne({
      username,
    });
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
