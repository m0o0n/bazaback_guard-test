import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FunctionStackService } from './function-stack.service';
import { CreateFunctionStackDto } from './dto/create-function-stack.dto';
import { UpdateFunctionStackDto } from './dto/update-function-stack.dto';

@Controller('function-stack')
export class FunctionStackController {
  constructor(private readonly functionStackService: FunctionStackService) {}

  @Post()
  create(@Body() createFunctionStackDto: CreateFunctionStackDto) { 
    return this.functionStackService.create(createFunctionStackDto);
  }

  @Get()
  findAll() {
    return this.functionStackService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.functionStackService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFunctionStackDto: UpdateFunctionStackDto) {
    return this.functionStackService.update(+id, updateFunctionStackDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.functionStackService.remove(+id);
  }
}
