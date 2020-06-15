import { Injectable, HttpService } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Site } from './entity/site.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SitesService {
  constructor(
    @InjectRepository(Site)
    private sitesRepository: Repository<Site>,
    private httpService: HttpService,
  ) {}

  findById(id: string): Promise<Site> {
    return this.sitesRepository.findOne(id);
  }

  async searchAndSave(address: string): Promise<Site> {
    await this.httpService
      .get('https://www.als.ogcio.gov.hk/lookup', {
        params: {
          q: address,
        },
      })
      .toPromise();

    const site: Site = {
      fullAddress: address,
      city: 'Hong Kong',
      country: 'HKG',
    };

    return this.sitesRepository.save(site);
  }
}
