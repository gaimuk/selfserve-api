import { Controller, Get, Param, Body, Post } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order-dto';

@Controller('orders')
export class OrdersController {
  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `order ${id}`;
  }

  @Post()
  create(@Body() createOrderDto: CreateOrderDto): string {
    return 'created order';
  }
}
