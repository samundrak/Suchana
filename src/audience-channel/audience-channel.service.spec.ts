import { Test, TestingModule } from '@nestjs/testing';
import { AudienceChannelService } from './audience-channel.service';

describe('AudienceChannelService', () => {
  let service: AudienceChannelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AudienceChannelService],
    }).compile();

    service = module.get<AudienceChannelService>(AudienceChannelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
