import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn, OneToMany
} from "typeorm";
import {Visitor} from "./visitor.entity";

@Entity("Country")
export class Country {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Visitor, (visitor) => visitor.country)
  visitor: Visitor;

  @Column({nullable: true})
  country: string;

  @Column({nullable: true})
  countryCode: string;

  @Column({nullable: true})
  city: string;

  @Column({nullable: true})
  street: string;

  @Column({nullable: true})
  countryCount: number;

  @CreateDateColumn()
  createdAt: Date;
}
