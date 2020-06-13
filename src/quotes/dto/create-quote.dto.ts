import { IsDateString, IsNotEmpty } from 'class-validator';
import { QuoteContact } from '../entity/quote-contact.entity';

export class CreateQuoteDto {
  @IsNotEmpty()
  siteId: string;

  @IsDateString()
  createDate: Date;

  @IsNotEmpty()
  contacts: QuoteContact[];
}
