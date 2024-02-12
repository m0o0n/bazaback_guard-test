/* eslint-disable @typescript-eslint/ban-types */
import { Injectable, ForbiddenException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Function } from 'src/functions/entities/function.entity';
import { Stack } from 'src/stack/entities/stack.entity';
import { Repository } from 'typeorm';
import { CreateFunctionStackDto } from './dto/create-function-stack.dto';
import { UpdateFunctionStackDto } from './dto/update-function-stack.dto';
import { FunctionStack } from './entities/function-stack.entity';

@Injectable()
export class FunctionStackService {
  constructor(
    @InjectRepository(FunctionStack)
    private readonly functionStackRepository: Repository<FunctionStack>,
    @InjectRepository(Stack)
    private readonly stackRepository: Repository<Stack>,
    @InjectRepository(Function)
    private readonly functionRepository: Repository<Function>,
  ) {}

  async create(createFunctionStackDto: CreateFunctionStackDto) {
    const stack = await this.stackRepository.findOne({
      where: { id: +createFunctionStackDto.stack_id },
    });
    const func = await this.functionRepository.findOne({
      where: { id: +createFunctionStackDto.function_id },
    });
    const funcStack = await this.functionStackRepository.findOne({
      where: {
        stack_id: {
          id: +createFunctionStackDto.stack_id,
        },
        function_id: {
          id: +createFunctionStackDto.function_id,
        },
      },
      relations: {
        stack_id: true,
        function_id: true,
      },
    });
    if (!stack || !func) {
      return new ForbiddenException('stack or function not exist');
    } else if (funcStack) {
      return new ForbiddenException(
        `stack: ${funcStack.stack_id.title} for function:${funcStack.function_id.title} already exist`,
      );
    }
    return this.functionStackRepository.save(createFunctionStackDto);
  }

  async findAll() {
    return this.functionStackRepository.find({
      relations: {
        stack_id: true,
        function_id: true,
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} functionStack`;
  }

  update(id: number, updateFunctionStackDto: UpdateFunctionStackDto) {
    return `This action updates a #${id} functionStack`;
  }

  remove(id: number) {
    return `This action removes a #${id} functionStack`;
  }
}
