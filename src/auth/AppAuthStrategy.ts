import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { App } from 'src/apps/entities/app.entity';
import { AppRepository } from 'src/apps/repository/app.repository';
import { SECRET } from 'src/constants/values';
import { jwtAppsConfig, jwtSessionConfig } from 'src/utils/configs';
import { IAppJWTPayload } from './interfaces/IAppJWTPayload';
import { IJWTPayload } from './interfaces/IJWTPayload';

@Injectable()
export class AppAuthStrategy extends PassportStrategy(Strategy, 'app') {
  constructor(
    @InjectRepository(AppRepository)
    private appRepository: AppRepository,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: jwtAppsConfig(SECRET),
    });
  }

  async validate(payload: IAppJWTPayload): Promise<App> {
    const { key } = payload;
    const app = this.appRepository.findOne({
      key,
      is_active: true,
    });
    if (!app) {
      throw new UnauthorizedException();
    }

    return app;
  }
}
