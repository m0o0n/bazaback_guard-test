import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { StackService } from './stack.service';
import { StackController } from './stack.controller';
import { Stack } from './entities/stack.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Stack])],
  controllers: [StackController],
  providers: [StackService],
})
export class StackModule {}
