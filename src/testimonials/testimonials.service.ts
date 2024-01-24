import { Injectable, NotFoundException } from '@nestjs/common';
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
    return await this.testimonialsRepository.save(createTestimonialDto);
  }

  async findAll() {
    return this.testimonialsRepository.find({
      order: {
        createdAt: 'DESC',
      },
    });
  }

  async findOne(id: number) {
    const post = await this.testimonialsRepository.findOne({
      where: { id },
    });
    if (!post) throw new NotFoundException('This excursion not found');
    return post;
  }

  async update(id: number, updateTestimonialDto: UpdateTestimonialDto) {
    const review = await this.testimonialsRepository.findOne({
      where: { id },
    });
    if (!review) throw new NotFoundException('This review not found');
    await this.testimonialsRepository.update(id, updateTestimonialDto);
    return { success: true };
  }

  async remove(id: number) {
    const review = await this.testimonialsRepository.findOne({
      where: { id },
    });
    if (!review) throw new NotFoundException('This review not found');
    await this.testimonialsRepository.delete(id);
    return { success: true };
  }

  async findAllWithPagination(page: number, limit: number) {
    const allReviews = await this.findAll();
    const totalLength = allReviews.length;
    const reviews = await this.testimonialsRepository.find({
      order: {
        createdAt: 'DESC',
      },
      take: limit,
      skip: (page - 1) * limit,
    });
    return { reviews, totalLength };
  }
}
