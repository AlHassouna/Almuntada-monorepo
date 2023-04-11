import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn, OneToMany
} from "typeorm";
import { Academic } from "./academic.entity";

@Entity("career")

export class Career {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  career: string;

  @OneToMany(() => Academic, (academic) => academic.career)
  user: Academic;
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
