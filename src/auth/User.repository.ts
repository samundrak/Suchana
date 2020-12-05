import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { AuthCredentialsDto } from './auth-credentials.dto';
import { UserEntity } from './User.entity';
import * as bcrypt from 'bcrypt';
import { USERNAME_EXISTS } from 'src/constants/errors';
import { ER_DUP_ENTRY } from 'src/constants/values';
import { App } from 'src/apps/entities/app.entity';

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {
  async signUp(authCredentials: AuthCredentialsDto) {
    try {
      const salt = await bcrypt.genSalt();
      const user = new UserEntity();
      user.username = authCredentials.username;
      user.password = this.hashPassword(authCredentials.password, salt);
      user.salt = salt;
      await user.save();
    } catch (err) {
      if (err.code === ER_DUP_ENTRY) {
        throw new ConflictException(USERNAME_EXISTS);
      }
      // @todo add logger
      throw new InternalServerErrorException();
    }
  }
  hashPassword(password: string, salt: string) {
    return bcrypt.hashSync(password, salt);
  }

  async validatePassword(
    authCredentialsDto: AuthCredentialsDto,
  ): Promise<Pick<UserEntity, 'id' | 'username'>> {
    const { username, password } = authCredentialsDto;
    const user = await this.findOne(
      {
        username,
      },
      {
        select: ['password', 'id', 'username', 'salt'],
      },
    );
    if (user && (await user.validatePassword(password))) {
      return {
        id: user.id,
        username: user.username,
      };
    }
  }

  async addApps(userId: number, app: App[]) {
    const user = await this.findOne({
      id: userId,
    });
    user.apps = app;
    await user.save();
  }
}
