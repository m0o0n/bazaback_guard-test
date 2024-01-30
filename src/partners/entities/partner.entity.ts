import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Partners' })
export class Partner {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'name of partner' })
  @Column()
  name: string;

  @ApiProperty({ description: 'url of partner`s image' })
  @Column()
  image_url: string;

  @ApiProperty({ description: 'url of partner`s page' })
  @Column()
  partner_url: string;

  @Column()
  public_cloudinary_id: string;
}
