import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateTestimonialDto } from './dto/create-testimonial.dto';
import { UpdateTestimonialDto } from './dto/update-testimonial.dto';
import { Testimonial } from './entities/testimonial.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TestimonialsService {
  constructor(
    @InjectRepository(Testimonial)
    private readonly testimonialsRepository: Repository<Testimonial>,
  ) {}

  async create(createTestimonialDto: CreateTestimonialDto) {
    await this.testimonialsRepository.save(createTestimonialDto);
  }

  async findAll() {
    try {
      const testimonials = await this.testimonialsRepository.find({
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
      const post = await this.testimonialsRepository.findOne({
        where: { id },
      });
      if (!post) throw new NotFoundException('This testimonial not found');
      return post;
    } catch (error) {
      throw new HttpException(
        'Server Error:',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(id: number, updateTestimonialDto: UpdateTestimonialDto) {
    try {
      const review = await this.testimonialsRepository.findOne({
        where: { id },
      });
      if (!review) throw new NotFoundException('This review not found');
      await this.testimonialsRepository.update(id, updateTestimonialDto);
      return { success: true };
    } catch (error) {
      throw new HttpException(
        'Server Error:',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async remove(id: number) {
    try {
      const review = await this.testimonialsRepository.findOne({
        where: { id },
      });
      if (!review) throw new NotFoundException('This review not found');
      await this.testimonialsRepository.delete(id);
      return { success: true };
    } catch (error) {
      throw new HttpException(
        'Server Error:',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
