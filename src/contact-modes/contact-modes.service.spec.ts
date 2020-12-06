import { Test, TestingModule } from '@nestjs/testing';
import { ContactModesService } from './contact-modes.service';

describe('ContactModesService', () => {
  let service: ContactModesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContactModesService],
    }).compile();

    service = module.get<ContactModesService>(ContactModesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
