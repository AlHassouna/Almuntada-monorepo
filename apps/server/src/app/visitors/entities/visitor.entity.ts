import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn, ManyToOne
} from "typeorm";
import {Country} from "./country.entity";

@Entity("Visitors")
export class Visitor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ip: string;

  @Column()
  userAgent: string;

  @Column({nullable: true})
  languages: string;

  @ManyToOne(() => Country, (country) => country.visitor)
  country: Country;

  @Column()
  pathname: string;

  @CreateDateColumn()
  createdAt: Date;
}
