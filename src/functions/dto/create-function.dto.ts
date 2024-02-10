import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateFunctionDto {
    @ApiProperty()
    @IsString()
    title: string;
}
