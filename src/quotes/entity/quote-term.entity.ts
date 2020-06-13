import { Column } from 'typeorm';

export class QuoteTerm {
  @Column()
  validTo: Date;

  @Column()
  conditions?: string[];
}
