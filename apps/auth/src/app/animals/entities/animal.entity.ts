import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('animals')
export class Animal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  createdAt: Date;
}
