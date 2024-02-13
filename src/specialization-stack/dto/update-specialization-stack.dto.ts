import { PartialType } from '@nestjs/swagger';
import { CreateSpecializationStackDto } from './create-specialization-stack.dto';

export class UpdateSpecializationStackDto extends PartialType(CreateSpecializationStackDto) {}
