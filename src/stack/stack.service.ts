import { Repository } from 'typeorm';
import { Injectable, ForbiddenException } from '@nestjs/common';
import { CreateStackDto } from './dto/create-stack.dto';
import { UpdateStackDto } from './dto/update-stack.dto';
import { Stack } from './entities/stack.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class StackService {
  constructor(
    @InjectRepository(Stack)
    private readonly stackRepository: Repository<Stack>
  ){}
  async create(createStackDto: CreateStackDto) {
    const stack = await this.stackRepository.findOne({where: {title: createStackDto.title}})
    if(stack){
      return new ForbiddenException(`Stack ${createStackDto.title} already exist`)
    }
    return await this.stackRepository.save(createStackDto);
  }

  findAll() {
    return this.stackRepository.find({});
  }

  async findOne(id: number) {
    return await this.stackRepository.findOne({where: {id}}) 
    ? await this.stackRepository.findOne({where: {id}}) 
    : new ForbiddenException('Stack not found');
  }

  async update(id: number, updateStackDto: UpdateStackDto) {
    const stack = await this.stackRepository.findOne({where: {id}})
    if(!stack) {
      return new ForbiddenException('Stack not found')
    }
    await this.stackRepository.update(id, updateStackDto)
    return await this.stackRepository.findOne({where: {id}});
  }

  remove(id: number) {
    return this.stackRepository.delete(id);
  }
}
