import { Function } from 'src/functions/entities/function.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { FunctionsService } from './functions.service';
import { FunctionsController } from './functions.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Function])],
  controllers: [FunctionsController],
  providers: [FunctionsService],
})
export class FunctionsModule {}
