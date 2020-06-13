import { Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm';
import { QuoteTerm } from './quote-term.entity';
import { QuoteContact } from './quote-contact.entity';

@Entity()
export class Quote {
  @ObjectIdColumn()
  id?: ObjectID;

  @Column()
  siteId: string;

  @Column()
  userId: string;

  @Column()
  createDate: Date;

  @Column()
  price: number;

  @Column(() => QuoteTerm)
  term: QuoteTerm;

  @Column(() => QuoteContact)
  contacts: QuoteContact[];
}
