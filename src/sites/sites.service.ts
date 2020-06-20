import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Site } from './entity/site.entity';
import { Repository } from 'typeorm';
import { AddressSearchService } from 'src/hkg-address-lookup/address-search.service';

@Injectable()
export class SitesService {
  constructor(
    @InjectRepository(Site)
    private sitesRepository: Repository<Site>,
    private addressSearchService: AddressSearchService,
  ) {}

  findById(id: string): Promise<Site> {
    return this.sitesRepository.findOne(id);
  }

  async searchAndSave(address: string): Promise<Site> {
    const addressSearchResponse = await this.addressSearchService.search(
      address,
    );

    const site: Site = {
      streetNumber:
        addressSearchResponse.SuggestedAddress[0].Address.PremisesAddress
          .EngPremisesAddress.EngStreet.BuildingNoFrom,
      streetName:
        addressSearchResponse.SuggestedAddress[0].Address.PremisesAddress
          .EngPremisesAddress.EngStreet.StreetName,
      city: 'Hong Kong',
      country: 'HKG',
    };

    return this.sitesRepository.save(site);
  }
}
