import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { UserEntity } from './User.entity';

export const GetUser = createParamDecorator(
  (data, ctx: ExecutionContext): UserEntity => {
    console.log(data);
    const req = ctx.switchToHttp().getRequest();
    return req.user;
  },
);
