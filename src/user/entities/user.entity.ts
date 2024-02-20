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

  @ApiProperty({ description: 'User`s role' })
  @Column()
  role: string;

  @CreateDateColumn()
  createdAt: Date;
}
