import { IsNumber, IsString } from "class-validator";

export class CategoryCustomerReqDto {
    @IsString()
    name?: string

    @IsNumber()
    priority?: number
}