import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn, ManyToOne
} from "typeorm";
import { Subject } from "../../academic/entities/subject.entity";
import { Country } from "./country.entity";

@Entity("Visitors")
export class Visitor {
  // TODO: check this code
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ip: string;

  @Column()
  userAgent: string;


  @Column()
  languages:string;

  @ManyToOne(() => Country, (country) => country.countryName)
  country: Country;

  // @ManyToOne(() => Country, (country) => country.area[])

  @Column()
  pathname: string;

  @CreateDateColumn()
  createdAt: Date;
}
