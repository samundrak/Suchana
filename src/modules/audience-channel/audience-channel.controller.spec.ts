import { Test, TestingModule } from '@nestjs/testing';
import { AudienceChannelController } from './audience-channel.controller';
import { AudienceChannelService } from './audience-channel.service';

describe('AudienceChannelController', () => {
  let controller: AudienceChannelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AudienceChannelController],
      providers: [AudienceChannelService],
    }).compile();

    controller = module.get<AudienceChannelController>(AudienceChannelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
