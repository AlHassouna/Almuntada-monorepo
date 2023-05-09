import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn
} from "typeorm";

@Entity("Visitors")
export class Visitor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ip: string;

  @Column()
  userAgent: string;

  @Column()
  location: string;

  @Column()
  pathname: string;

  @CreateDateColumn()
  createdAt: Date;


}
