
import { ApiProperty } from "@nestjs/swagger";
import { FunctionStack } from "src/function-stack/entities/function-stack.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'stack'})
export class Stack {
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({description: 'title of stack technology such as HTML/CSS'})
    @Column()
    title: string
    
    @OneToMany(()=> FunctionStack, (func)=> func.stack_id)
    stack_function_id: FunctionStack[]
}
