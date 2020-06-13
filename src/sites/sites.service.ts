import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Site } from './entity/site.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SitesService {
  constructor(
    @InjectRepository(Site)
    private sitesRepository: Repository<Site>,
  ) {}

  findById(id: string): Promise<Site> {
    return this.sitesRepository.findOne(id);
  }

  searchAndSave(address: string): Promise<Site> {
    // TODO: search from Hong Kong gov address API instead
    const site: Site = {
      fullAddress: address,
      city: 'Hong Kong',
      country: 'HKG',
    };

    return this.sitesRepository.save(site);
  }
}
