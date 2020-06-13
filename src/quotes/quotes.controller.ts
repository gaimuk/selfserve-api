import { Controller, Param, Get, Post, Body } from '@nestjs/common';
import { Quote } from './entity/quote.entity';
import { QuotesService } from './quotes.service';
import { CreateQuoteDto } from './dto/create-quote.dto';

@Controller('quotes')
export class QuotesController {
  constructor(private quotesService: QuotesService) {}

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Quote> {
    return this.quotesService.findById(id, 'billyb');
  }

  @Post()
  create(@Body() createQuoteDto: CreateQuoteDto): Promise<Quote> {
    return this.quotesService.save(createQuoteDto, 'billyb');
  }
}
