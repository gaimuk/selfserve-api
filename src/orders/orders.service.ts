import {
  Injectable,
  BadRequestException,
  UnauthorizedException,
  NotFoundException,
} from '@nestjs/common';
import { Order } from './entity/order.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { Quote } from 'src/quotes/entity/quote.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order) private ordersRepository: Repository<Order>,
    @InjectRepository(Quote) private quotesRepository: Repository<Quote>,
  ) {}

  async findById(id: string, userId: string): Promise<Order> {
    const order = await this.ordersRepository.findOne(id);

    if (order == null) {
      throw new NotFoundException();
    }

    this.checkUserId(userId, order.quoteId);

    return order;
  }

  async ackOrder(
    createOrderDto: CreateOrderDto,
    userId: string,
  ): Promise<Order> {
    this.checkUserId(userId, createOrderDto.quoteId);

    const order = {
      status: 'ACK',
      createDate: new Date(),
      ...createOrderDto,
    };
    return this.ordersRepository.save(order);
  }

  private async checkUserId(userId: string, quoteId: string) {
    const quote = await this.quotesRepository.findOne(quoteId);

    if (quote == null) {
      throw new BadRequestException('Quote is not avaialble');
    }

    if (quote.userId != userId) {
      throw new UnauthorizedException();
    }
  }
}
