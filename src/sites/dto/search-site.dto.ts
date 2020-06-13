import { IsNotEmpty } from 'class-validator';

export class SearchSiteDto {
  @IsNotEmpty()
  address: string;
}
