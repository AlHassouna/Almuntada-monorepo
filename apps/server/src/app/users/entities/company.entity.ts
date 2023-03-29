import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn, OneToMany,
} from 'typeorm';
import {User} from './user.entity';

@Entity('company')

export class Company {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  company: string;

  @OneToMany(() => User, (user) => user.company)
  user: User;
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
