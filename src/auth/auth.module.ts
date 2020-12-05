import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserRepository } from './User.repository';
import { PassportModule } from '@nestjs/passport';
import { JWTStrategy } from './JWTStrategy';
import { jwtSessionConfig } from 'src/utils/configs';
import { JWT_EXPIRES_IN, JWT_STRATEGY, SECRET } from 'src/constants/values';

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
  ],
  controllers: [AuthController],
  providers: [AuthService, JWTStrategy],
  exports: [JWTStrategy, PassportModule],
})
export class AuthModule {}
