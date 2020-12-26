import { Test, TestingModule } from '@nestjs/testing';
import { DestinedNotificationHandlerService } from './destined-notification-handler.service';

describe('DestinedNotificationHandlerService', () => {
  let service: DestinedNotificationHandlerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DestinedNotificationHandlerService],
    }).compile();

    service = module.get<DestinedNotificationHandlerService>(DestinedNotificationHandlerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
