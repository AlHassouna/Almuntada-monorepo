import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export enum accessLevelPermissions {
  VIEWER = "viewer",
  ADMIN = "admin",
  SUPERADMIN = "superadmin"
}

@Entity("user")

export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userName: string;

  @Column()
  password: string;

  @Column()
  firstName: string;
  @Column()
  lastName: string;

  @Column({
    type: "enum",
    enum: accessLevelPermissions,
    default: accessLevelPermissions.SUPERADMIN
  })
  adminPermissions: accessLevelPermissions;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
