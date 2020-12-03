import { Test, TestingModule } from '@nestjs/testing';
import { AudienceController } from './audience.controller';
import { AudienceService } from './audience.service';

describe('AudienceController', () => {
  let controller: AudienceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AudienceController],
      providers: [AudienceService],
    }).compile();

    controller = module.get<AudienceController>(AudienceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
