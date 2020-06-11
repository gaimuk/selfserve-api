import { Controller, Param, Get, Post, Body } from '@nestjs/common';
import { CreateQuoteDto } from './dto/create-quote.dto';

@Controller('quotes')
export class QuotesController {
  @Get(':id')
  findOne(@Param('id') id: string) {
    return `quote ${id}`;
  }

  @Post()
  create(@Body() createQuoteDto: CreateQuoteDto) {
    return 'created quote';
  }
}
