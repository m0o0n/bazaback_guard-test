import { ApiProperty } from "@nestjs/swagger";
import { Function } from "src/functions/entities/function.entity";
import { Stack } from "src/stack/entities/stack.entity";
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class FunctionStack {
    @PrimaryGeneratedColumn()
    id: number

    @ApiProperty({description: 'Function id where function PM or frontend etc'})
    @ManyToOne(()=> Function, (func)=> func.function_id)
    @JoinColumn({name: 'function_id'})
    function_id: Function

    @ApiProperty({description: 'Stack id where stack HTML/CSS or Figma etc'})
    @ManyToOne(()=> Stack, (stack)=> stack.stack_function_id)
    @JoinColumn({name: 'stack_id'})
    stack_id: Stack
}
