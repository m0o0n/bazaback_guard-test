import { ApiProperty } from '@nestjs/swagger';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity({ name: 'Testimonials' })
export class Testimonial {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'Reviewer`s name' })
  @Column()
  name: string;

  @ApiProperty({ description: 'Review text' })
  @Column()
  review: string;

  @CreateDateColumn()
  createdAt: Date;
}
