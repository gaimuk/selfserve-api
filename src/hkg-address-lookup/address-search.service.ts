import { Injectable, HttpService } from '@nestjs/common';
import { AddressSearchResponseDto } from './dto/address-search-response.dto';

@Injectable()
export class AddressSearchService {
  constructor(private httpService: HttpService) {}

  async search(address: string): Promise<AddressSearchResponseDto> {
    const result = await this.httpService
      .get<AddressSearchResponseDto>('https://www.als.ogcio.gov.hk/lookup', {
        params: {
          q: address,
        },
      })
      .toPromise();

    return result.data;
  }
}
