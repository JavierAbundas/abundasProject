import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column('varchar', { length: 100 })
  fullName: string;
  @Column('varchar', { length: 20 })
  phone: string;
  @Column('varchar', { length: 50 })
  email: string;
  @Column('varchar', { length: 20 })
  password: string;
  @Column('varchar', { length: 100 })
  adress: string;
  @Column('int')
  zip: number;
  @Column('varchar', { length: 200 })
  photo: string;
  @Column()
  role: string;
  @Column()
  state: string;
  @Column()
  city: string;
  @Column()
  org: string;
}
