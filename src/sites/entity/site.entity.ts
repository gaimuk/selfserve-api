import { Entity, Column, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
export class Site {
  @ObjectIdColumn()
  id?: ObjectID;

  @Column()
  streetNumber: string;

  @Column()
  streetName: string;

  @Column()
  city: string;

  @Column()
  country: string;
}
