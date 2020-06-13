import { Controller, Param, Get, Query } from '@nestjs/common';
import { SitesService } from './sites.service';
import { Site } from './entity/site.entity';
import { SearchSiteDto } from './dto/search-site.dto';

@Controller('sites')
export class SitesController {
  constructor(private sitesService: SitesService) {}

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Site> {
    return this.sitesService.findById(id);
  }

  @Get()
  search(@Query() searchSiteDto: SearchSiteDto): Promise<Site> {
    return this.sitesService.searchAndSave(searchSiteDto.address);
  }
}
