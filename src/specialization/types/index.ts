import { ApiProperty } from "@nestjs/swagger"

export class ISpecializationStack{
    @ApiProperty()
    id: number
    @ApiProperty()
    specialization_stack_id: number
    @ApiProperty()
    title: string
}


export class ISpecializationWithStack {
    @ApiProperty()
    id: number
    @ApiProperty()
    title: number
    @ApiProperty({
        type: [ISpecializationStack]
    })
    stack: [ISpecializationStack]
}