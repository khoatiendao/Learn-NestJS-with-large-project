import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateCategoryDto {
    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    @IsString()
    description?: string

    @IsOptional()
    @IsString()
    url?: string

    @IsOptional()
    @IsBoolean()
    isActive?: boolean;
}