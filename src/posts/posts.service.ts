import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private readonly postsRepository: Repository<Post>,
  ) {}

  async create(
    public_cloudinary_id: string,
    image_url: string,
    createPostDto: CreatePostDto,
  ) {
    return await this.postsRepository.save({
      ...createPostDto,
      image_url,
      public_cloudinary_id,
    });
  }

  async findAll() {
    try {
      const testimonials = await this.postsRepository.find({
        order: {
          createdAt: 'DESC',
        },
      });
      return testimonials;
    } catch (error) {
      throw new HttpException(
        'Server Error:',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findOne(id: number) {
    try {
      const post = await this.postsRepository.findOne({
        where: { id },
      });
      if (!post) throw new NotFoundException('Post not found');
      return post;
    } catch (error) {
      throw new HttpException(
        'Server Error:',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(
    id: number,
    updatePostDto: UpdatePostDto,
    image_id?: string,
    image_url?: string,
  ) {
    const post = await this.postsRepository.findOne({
      where: { id },
    });
    if (!post) throw new NotFoundException('Post not found');
    if (image_id) {
      return await this.postsRepository.update(id, {
        ...updatePostDto,
        image_id,
        image_url,
      });
    }
    return await this.postsRepository.update(id, updatePostDto);
  }

  async remove(id: number) {
    try {
      const post = await this.postsRepository.findOne({
        where: { id },
      });
      if (!post) throw new NotFoundException('Post not found');
      await this.postsRepository.delete(id);
      return { message: 'partner successefuly deleted', post };
    } catch (error) {
      throw new HttpException(
        'Server Error:',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
