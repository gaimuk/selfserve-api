import { ObjectIdColumn, Column, Entity } from 'typeorm';

@Entity()
export class Order {
  @ObjectIdColumn()
  id?: string;

  @Column()
  quoteId: string;

  @Column()
  status: string;

  @Column()
  createDate: Date;

  @Column()
  requestedServiceStartDate?: Date;

  @Column()
  actualServiceStartDate?: Date;
}
