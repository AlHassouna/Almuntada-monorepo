import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn, OneToMany
} from "typeorm";
import { Academic } from "./academic.entity";

@Entity("subject")

export class Subject {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  subject: string;

  @OneToMany(() => Academic, (academic) => academic.subject)
  user: Academic;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
