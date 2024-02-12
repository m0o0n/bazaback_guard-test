import { Function } from 'src/functions/entities/function.entity';
import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateFunctionDto } from './dto/create-function.dto';
import { UpdateFunctionDto } from './dto/update-function.dto';
import { Repository } from 'typeorm';

@Injectable()
export class FunctionsService {
  constructor(
    @InjectRepository(Function)
    private readonly functionRepository: Repository<Function>
  ){}
  async create(createFunctionDto: CreateFunctionDto) {
    const func = await this.functionRepository.findOne({where: {title: createFunctionDto.title} })
    if(func) {
      return new ForbiddenException(`Funсtion ${createFunctionDto.title} allready exist`)
    } 
    return await this.functionRepository.save(createFunctionDto);
  }

  async findAll() {
    return await this.functionRepository.find({});
  }

  async findAllWithStack(){
    const result = await this.functionRepository.find({
      relations: {
        function_id: {
          stack_id: true
        },
      },
    });
    const formatResult = result.map(({id, title, function_id}) => {
      return {
        id,
        title,
        stack: function_id.map(({stack_id}) => ({id: stack_id.id, title:stack_id.title}))
      }
    })
    return formatResult
  }

  async findOne(id: number) {
    return await this.functionRepository.findOne({where: {id} })
    ? await this.functionRepository.findOne({where: {id} })
    : new NotFoundException('Function not found');
  }

  async update(id: number, updateFunctionDto: UpdateFunctionDto) {
    const func = await this.functionRepository.findOne({where: {id} })
    if(!func) return new NotFoundException('Function not found')
    await this.functionRepository.update(id, updateFunctionDto)
    return await this.functionRepository.findOne({where: {id} });
  }

  remove(id: number) {
    const func = this.functionRepository.findOne({where: {id} })
    if(!func) return new NotFoundException('Function not found')
    return this.functionRepository.delete(id);
  }
}
