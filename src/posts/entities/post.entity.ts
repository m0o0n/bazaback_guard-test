import { ApiProperty } from '@nestjs/swagger';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity({ name: 'Posts' })
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'Title of the post' })
  @Column()
  title: string;

  @ApiProperty({ description: 'Content of the post' })
  @Column()
  content: string;

  @ApiProperty({ description: 'Url of the image' })
  @Column()
  image_url: string;

  @ApiProperty({ description: 'Cloudinary public id of the image' })
  @Column()
  image_id: string;

  @CreateDateColumn()
  createdAt: Date;
}
