import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SpecializationStackService } from './specialization-stack.service';
import { CreateSpecializationStackDto } from './dto/create-specialization-stack.dto';
import { UpdateSpecializationStackDto } from './dto/update-specialization-stack.dto';

@Controller('specialization-stack')
export class SpecializationStackController {
  constructor(private readonly specializationStackService: SpecializationStackService) {}

  @Post()
  create(@Body() createSpecializationStackDto: CreateSpecializationStackDto) {
    return this.specializationStackService.create(createSpecializationStackDto);
  }

  @Get()
  findAll() {
    return this.specializationStackService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.specializationStackService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSpecializationStackDto: UpdateSpecializationStackDto) {
    return this.specializationStackService.update(+id, updateSpecializationStackDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.specializationStackService.remove(+id);
  }
}
