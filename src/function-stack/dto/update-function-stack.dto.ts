import { PartialType } from '@nestjs/swagger';
import { CreateFunctionStackDto } from './create-function-stack.dto';

export class UpdateFunctionStackDto extends PartialType(CreateFunctionStackDto) {}
