import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserRepository } from './User.repository';
import { PassportModule } from '@nestjs/passport';
import { JWTStrategy } from './JWTStrategy';
import { jwtAppsConfig, jwtSessionConfig } from 'src/utils/configs';
import { JWT_EXPIRES_IN, JWT_STRATEGY, SECRET } from 'src/constants/values';
import { AppAuthStrategy } from './AppAuthStrategy';
import { AppModule } from 'src/app.module';
import { AppRepository } from 'src/modules/apps/repository/app.repository';
import { AppsModule } from 'src/modules/apps/apps.module';

@Module({
  imports: [
    PassportModule.register({
      defaultStrategy: JWT_STRATEGY,
    }),
    JwtModule.register({
      secret: jwtSessionConfig(SECRET),
      signOptions: {
        expiresIn: jwtSessionConfig(JWT_EXPIRES_IN),
      },
    }),
    TypeOrmModule.forFeature([UserRepository]),
    AppsModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, JWTStrategy, AppRepository, AppAuthStrategy],
  exports: [JWTStrategy, PassportModule, AppAuthStrategy],
})
export class AuthModule {}
