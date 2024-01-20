import { ApiProperty } from '@nestjs/swagger';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity({ name: 'User' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'User`s email' })
  @Column()
  email: string;

  @ApiProperty({ description: 'User`s password' })
  @Column()
  password: string;

  @CreateDateColumn()
  createdAt: Date;
}
