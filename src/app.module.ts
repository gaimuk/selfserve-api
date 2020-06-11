import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SitesController } from './sites/sites.controller';
import { QuotesController } from './quotes/quotes.controller';
import { OrdersController } from './orders/orders.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    SitesController,
    QuotesController,
    OrdersController,
  ],
  providers: [AppService],
})
export class AppModule {}
