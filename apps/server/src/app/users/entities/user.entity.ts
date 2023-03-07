import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fistName: string;

  @Column()
  secondName: string;

  @Column()
  email: string;

  @Column()
  image: string;

  @Column()
  age: number;

  @Column()
  city: string;

  @Column()
  degree: string;

  @Column()
  subject: string;

  @Column()
  career: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
