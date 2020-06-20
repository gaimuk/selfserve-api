import { PremisesAddressLang } from './premises-address-lang.dto';
import { GeospatialInfo } from './geospatial-info.dto';

export class PremisesAddress {
  EngPremisesAddress: PremisesAddressLang;
  ChiPremisesAddress: PremisesAddressLang;
  GeoAddress: string;
  GeospatialInformation: GeospatialInfo;
}
