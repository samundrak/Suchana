import { Test, TestingModule } from '@nestjs/testing';
import { AudienceService } from './audience.service';

describe('AudienceService', () => {
  let service: AudienceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AudienceService],
    }).compile();

    service = module.get<AudienceService>(AudienceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
