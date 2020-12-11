import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as config from 'config';
import * as bodyParser from 'body-parser';
import { router as bullBoardMiddleware } from 'bull-board';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(bodyParser.json({ limit: '10mb' }));
  app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
  app.setGlobalPrefix('api/v1');
  app.use('/jobs', bullBoardMiddleware);
  await app.listen(config.get('server.port'));
}
bootstrap();
