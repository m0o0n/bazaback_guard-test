
import { Stack } from 'src/stack/entities/stack.entity';
import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";
import { Function } from 'src/functions/entities/function.entity';

export class CreateFunctionStackDto {
    @ApiProperty()
    stack_id: Stack

    @ApiProperty()
    function_id: Function
}
