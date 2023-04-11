import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn, OneToMany
} from "typeorm";
import { Academic } from "./academic.entity";

@Entity("company")

export class Company {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  company: string;

  @OneToMany(() => Academic, (academic) => academic.company)
  user: Academic;
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
