import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUrl } from 'class-validator';

export class CreatePostDto {
  @ApiProperty()
  @IsUrl()
  title: string;

  @ApiProperty()
  @IsString()
  content: string;

  @ApiProperty()
  @IsUrl()
  image_url: string;

  @ApiProperty()
  @IsString()
  image_id: string;
}
