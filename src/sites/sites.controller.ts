import { Controller, Param, Get, Post, Body } from '@nestjs/common';
import { CreateSiteDto } from './dto/create-site-dto';

@Controller('sites')
export class SitesController {
  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `site ${id}`;
  }

  @Post()
  create(@Body() createSiteDto: CreateSiteDto): CreateSiteDto {
    return 'created site';
  }
}
