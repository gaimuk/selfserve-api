import { Test, TestingModule } from '@nestjs/testing';
import { AddressSearchService } from './address-search.service';

describe('AddressSearchService', () => {
  let service: AddressSearchService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AddressSearchService],
    }).compile();

    service = module.get<AddressSearchService>(AddressSearchService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
