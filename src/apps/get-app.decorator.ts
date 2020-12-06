import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { App } from './entities/app.entity';

export const GetApp = createParamDecorator(
  (_, ctx: ExecutionContext): App => {
    const req = ctx.switchToHttp().getRequest();
    return req.user;
  },
);
