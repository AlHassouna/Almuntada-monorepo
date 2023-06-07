import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn
} from "typeorm";
@Entity("Country")
export class Country {
  // TODO: check this code
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  countryName: string;

  @Column()
  countryCode: string;

  @Column()
  area:string[]

  @Column()
  countryCount:number;

  @CreateDateColumn()
  createdAt: Date;
}
