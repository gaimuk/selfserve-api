import { Column } from 'typeorm';

export class QuoteContact {
  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  role: string;
}
