import { Test, TestingModule } from '@nestjs/testing';
import { HKGAddressLookupService } from './hkg-address-lookup.service';

describe('HKGAddressLookupService', () => {
  let service: HKGAddressLookupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HKGAddressLookupService],
    }).compile();

    service = module.get<HKGAddressLookupService>(HKGAddressLookupService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
