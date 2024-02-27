import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  HttpCode,
} from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { NotFoundResponse } from 'src/types';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Counter } from './entities/counter.entity';
import { CountersService } from './counters.service';
import { CreateCounterDto } from './dto/create-counter.dto';
import { UpdateCounterDto } from './dto/update-counter.dto';
import { UpdateTestimonialDto } from 'src/testimonials/dto/update-testimonial.dto';
import { RoleGuard } from 'src/auth/role/role.guard';

@ApiTags('Counters')
@Controller('counters')
export class CountersController {
  constructor(private readonly countersService: CountersService) {}

  //create counter
  @Post()
  @HttpCode(201)
  @ApiBody({ type: CreateCounterDto })
  @ApiResponse({
    status: 201,
    description: 'create testimonial',
    type: Counter,
  })
  @ApiResponse({
    status: 500,
    description: 'internal server error',
  })
  @UseGuards(JwtAuthGuard, RoleGuard)
  create(@Body() createCounterDto: CreateCounterDto) {
    return this.countersService.create(createCounterDto);
  }

  //get all counters
  @Get()
  @ApiResponse({
    status: 200,
    description: 'get all counters',
    type: [Counter],
  })
  @ApiResponse({
    status: 500,
    description: 'internal server error',
  })
  findAll() {
    return this.countersService.findAll();
  }

  //get counter by id
  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'get single counter',
    type: [Counter],
  })
  @ApiResponse({
    status: 404,
    description: 'counter not found',
    type: NotFoundResponse,
  })
  @ApiResponse({
    status: 500,
    description: 'internal server error',
  })
  findOne(@Param('id') id: string) {
    return this.countersService.findOne(+id);
  }

  //update counter
  @Patch(':id')
  @ApiBody({ type: UpdateTestimonialDto })
  @ApiResponse({
    status: 200,
    description: 'update counters',
    type: [Counter],
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
  @UseGuards(JwtAuthGuard, RoleGuard)
  update(@Param('id') id: string, @Body() updateCounterDto: UpdateCounterDto) {
    return this.countersService.update(+id, updateCounterDto);
  }

  //delete counter
  @Delete(':id')
  @ApiResponse({ status: 200, description: 'delete counter' })
  @ApiResponse({
    status: 404,
    description: 'not found',
    type: NotFoundResponse,
  })
  @ApiResponse({
    status: 500,
    description: 'internal server error',
  })
  @UseGuards(JwtAuthGuard, RoleGuard)
  remove(@Param('id') id: string) {
    return this.countersService.remove(+id);
  }
}
