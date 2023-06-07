import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('pages')
export class Pages{
  // TODO: check this code
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  pathname: PagePathName;

  @Column()
  counter:number;

  @CreateDateColumn()
  createdAt: Date;
}

export enum PagePathName {
HOME="/",
ACADEMIC="academic",
PODCAST="podcast",
CONTACT="contact",
}
