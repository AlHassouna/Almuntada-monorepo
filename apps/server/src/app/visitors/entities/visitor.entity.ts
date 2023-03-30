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
  device: string;

  @Column()
  location: string;

  @Column()
  count_visits: number;

  @Column()
  is_Vpn: boolean;

  @CreateDateColumn()
  createdAt: Date;


}
