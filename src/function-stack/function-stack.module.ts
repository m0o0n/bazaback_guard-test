import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { FunctionStackService } from './function-stack.service';
import { FunctionStackController } from './function-stack.controller';
import { FunctionStack } from './entities/function-stack.entity';
import { Stack } from 'src/stack/entities/stack.entity';
import { Function } from 'src/functions/entities/function.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FunctionStack, Stack, Function])],
  controllers: [FunctionStackController],
  providers: [FunctionStackService],
})
export class FunctionStackModule {}
