import { IsNotEmpty, IsDateString, IsOptional } from 'class-validator';

export class CreateOrderDto {
  @IsNotEmpty()
  quoteId: string;

  @IsDateString()
  @IsOptional()
  requestedServiceStartDate?: Date;
}
