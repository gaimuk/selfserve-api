import { Entity, Column, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
export class Site {
  @ObjectIdColumn()
  id?: ObjectID;

  @Column()
  fullAddress: string;

  @Column()
  city: string;

  @Column()
  country: string;
}
