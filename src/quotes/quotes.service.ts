import {
  Injectable,
  BadRequestException,
  UnauthorizedException,
  NotFoundException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { Quote } from './entity/quote.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Site } from 'src/sites/entity/site.entity';
import { CreateQuoteDto } from './dto/create-quote.dto';

@Injectable()
export class QuotesService {
  constructor(
    @InjectRepository(Quote) private quotesRepository: Repository<Quote>,
    @InjectRepository(Site) private sitesRepository: Repository<Site>,
  ) {}

  async findById(id: string, userId: string): Promise<Quote> {
    const quote = await this.quotesRepository.findOne(id);

    if (quote == null) {
      throw new NotFoundException();
    }

    if (quote.userId != userId) {
      throw new UnauthorizedException();
    }

    return quote;
  }

  async save(createQuoteDto: CreateQuoteDto, userId: string): Promise<Quote> {
    const site = await this.sitesRepository.findOne(createQuoteDto.siteId);

    if (site == null) {
      throw new BadRequestException();
    }

    const quote: Quote = {
      price: Math.random() * 1000,
      userId: userId,
      term: {
        validTo: new Date('2020-09-01T00:00:00Z'),
        conditions: ['Quote cannot be transferred', 'Subject to change'],
      },
      ...createQuoteDto,
    };

    return this.quotesRepository.save(quote);
  }
}
