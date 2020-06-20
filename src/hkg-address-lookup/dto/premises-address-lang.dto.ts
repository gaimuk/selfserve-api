import { Street } from './street.dto';
import { District } from './district.dto';

export class PremisesAddressLang {
  BuildingName: string;
  EngStreet: Street;
  EngDistrict: District;
  ChiStreet: Street;
  ChiDistrict: District;
  Region: string;
}
