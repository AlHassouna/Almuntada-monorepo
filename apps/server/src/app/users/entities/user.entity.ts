import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne, JoinColumn
} from 'typeorm';
import {Subject} from "./subject.entity";

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  imageUrl: string;

  @Column()
  age: number;

  @Column()
  city: string;

  @Column()
  degree: string;


  @OneToOne(() => Subject)
  @JoinColumn()
  subject: Subject;

  @Column()
  career: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
