import { Module, ValidationPipe, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { SitesController } from './sites/sites.controller';
import { QuotesController } from './quotes/quotes.controller';
import { OrdersController } from './orders/orders.controller';
import { SitesService } from './sites/sites.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Site } from './sites/entity/site.entity';
import { QuotesService } from './quotes/quotes.service';
import { Quote } from './quotes/entity/quote.entity';
import { APP_PIPE } from '@nestjs/core';
import { OrdersService } from './orders/orders.service';
import { Order } from './orders/entity/order.entity';
import { AddressSearchService } from './hkg-address-lookup/address-search.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TypeOrmModule.forFeature([Site, Quote, Order]),
    HttpModule,
  ],
  controllers: [
    AppController,
    SitesController,
    QuotesController,
    OrdersController,
  ],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
    SitesService,
    QuotesService,
    OrdersService,
    AddressSearchService,
  ],
})
export class AppModule {}
