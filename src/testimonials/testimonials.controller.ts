import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Req,
  UseGuards,
  HttpCode,
} from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { NotFoundResponse } from '../types';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Testimonial } from './entities/testimonial.entity';
import { TestimonialsService } from './testimonials.service';
import { CreateTestimonialDto } from './dto/create-testimonial.dto';
import { UpdateTestimonialDto } from './dto/update-testimonial.dto';

@ApiTags('Testimonials')
@Controller('testimonials')
export class TestimonialsController {
  constructor(private readonly testimonialsService: TestimonialsService) {}

  //get testimonials with pagination
  @Get('pagination')
  @ApiResponse({
    status: 201,
    description: 'get all images',
    type: [Testimonial],
  })
  @ApiResponse({
    status: 404,
    description: 'not found',
    type: NotFoundResponse,
  })
  @ApiResponse({
    status: 500,
    description: 'internal server error',
  })
  findAllWithPagination(
    @Req() req,
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 2,
  ) {
    return this.testimonialsService.findAllWithPagination(+page, +limit);
  }

  //create testimonial
  @Post()
  @HttpCode(201)
  @ApiBody({ type: CreateTestimonialDto })
  @ApiResponse({
    status: 201,
    description: 'create testimonial',
    type: Testimonial,
  })
  @ApiResponse({
    status: 500,
    description: 'internal server error',
  })
  // @UseGuards(JwtAuthGuard)
  create(@Body() createTestimonialDto: CreateTestimonialDto) {
    return this.testimonialsService.create(createTestimonialDto);
  }

  //get all testimonials
  @Get()
  @ApiResponse({
    status: 201,
    description: 'get all testimonials',
    type: [Testimonial],
  })
  @ApiResponse({
    status: 404,
    description: 'not found',
    type: NotFoundResponse,
  })
  @ApiResponse({
    status: 500,
    description: 'internal server error',
  })
  findAll() {
    return this.testimonialsService.findAll();
  }

  //get testimonial by ID
  @Get(':id')
  @ApiResponse({
    status: 201,
    description: 'get single testimonial',
    type: Testimonial,
  })
  @ApiResponse({
    status: 404,
    description: 'not found',
    type: NotFoundResponse,
  })
  @ApiResponse({
    status: 500,
    description: 'internal server error',
  })
  findOne(@Param('id') id: string) {
    return this.testimonialsService.findOne(+id);
  }

  //update testimonial
  @Patch(':id')
  @ApiBody({ type: UpdateTestimonialDto })
  @ApiResponse({
    status: 201,
    description: 'update testimonial',
    type: Testimonial,
  })
  @ApiResponse({
    status: 404,
    description: 'not found',
    type: NotFoundResponse,
  })
  @ApiResponse({
    status: 500,
    description: 'internal server error',
  })
  @UseGuards(JwtAuthGuard)
  update(
    @Param('id') id: string,
    @Body() updateTestimonialDto: UpdateTestimonialDto,
  ) {
    return this.testimonialsService.update(+id, updateTestimonialDto);
  }

  //delete testimonial
  @Delete(':id')
  @ApiResponse({ status: 201, description: 'delete testimonial' })
  @ApiResponse({
    status: 404,
    description: 'not found',
    type: NotFoundResponse,
  })
  @ApiResponse({
    status: 500,
    description: 'internal server error',
  })
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.testimonialsService.remove(+id);
  }
}
