import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne
} from "typeorm";
import {Subject} from "./subject.entity";
import {Company} from "./company.entity";
import {Career} from "./career.entity";

@Entity("academic")
export class Academic {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false
  })
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  imageUrl: string;

  @Column()
  age: string;

  @Column()
  city: string;


  @ManyToOne(() => Subject, (subject) => subject.user)
  subject: Subject;

  @ManyToOne(() => Career, (career) => career.user)
  career: Career;

  @Column()
  gender: string;

  @Column()
  phone: string;

  @ManyToOne(() => Company, (company) => company.user)
  company: Company;

  @Column({default: ""})
  linkedIn: string

  @Column({default: ""})
  facebook: string

  @Column({type: "boolean", default: false})
  isApproved: boolean;
  @Column({type: "boolean", default: false})
  isBlocked: boolean;


  @Column()
  isAgree: boolean;
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
