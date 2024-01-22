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
} from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Review } from './entities/review.entity';
import { NotFoundResponse } from '../types';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('Reviews')
@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  //get reviews with pagination
  @Get('pagination')
  @ApiResponse({
    status: 201,
    description: 'get all images',
    type: [Review],
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
    return this.reviewsService.findAllWithPagination(+page, +limit);
  }

  //create review
  @Post()
  @ApiBody({ type: CreateReviewDto })
  @ApiResponse({ status: 201, description: 'create review', type: Review })
  @ApiResponse({
    status: 500,
    description: 'internal server error',
  })
  @UseGuards(JwtAuthGuard)
  create(@Body() createReviewDto: CreateReviewDto) {
    return this.reviewsService.create(createReviewDto);
  }

  //get all reviews
  @Get()
  @ApiResponse({ status: 201, description: 'get all reviews', type: [Review] })
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
    return this.reviewsService.findAll();
  }

  //get review by ID
  @Get(':id')
  @ApiResponse({
    status: 201,
    description: 'get single review',
    type: Review,
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
    return this.reviewsService.findOne(+id);
  }

  //update review
  @Patch(':id')
  @ApiBody({ type: UpdateReviewDto })
  @ApiResponse({ status: 201, description: 'update review', type: Review })
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
  update(@Param('id') id: string, @Body() updateReviewDto: UpdateReviewDto) {
    return this.reviewsService.update(+id, updateReviewDto);
  }

  //delete review
  @Delete(':id')
  @ApiResponse({ status: 201, description: 'delete review' })
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
    return this.reviewsService.remove(+id);
  }
}
