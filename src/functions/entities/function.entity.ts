import { FunctionStack } from "src/function-stack/entities/function-stack.entity";
import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'function'})
export class Function {
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({description: 'Function which candidate execute on project such as PM or frontend etc'})
    @Column()
    title: string

    @OneToMany(() => FunctionStack, (func)=> func.function_id)
    function_id: FunctionStack[]
}
