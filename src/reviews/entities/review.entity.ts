import { ApiProperty } from '@nestjs/swagger';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity({ name: 'Review' })
export class Review {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'Reviewer`s name in ukrainian' })
  @Column()
  name_ua: string;

  @ApiProperty({ description: 'Reviewer`s name in english' })
  @Column()
  name_en: string;

  @ApiProperty({ description: 'Review text  in ukrainian' })
  @Column()
  review_ua: string;

  @ApiProperty({ description: 'Review text in english' })
  @Column()
  review_en: string;

  @CreateDateColumn()
  createdAt: Date;
}
