import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsNumber, IsString, Max, Min } from "class-validator";
import { PaginationReqDto } from "src/common/dtos/pagination.dto";

export class PrizeCreateReqDto {
    @IsString()
    @ApiProperty()
    name: string;

    @IsNumber(
        { allowNaN: false, allowInfinity: false },
        { message: 'Probability must be a valid number' }
    )
    @Min(0, { message: 'Probability must be between 0 and 1' })
    @Max(1, { message: 'Probability must be between 0 and 1' })
    @Transform(({ value }) => parseFloat(value))
    @ApiProperty()
    probability: number;

    @IsNumber()
    @ApiProperty()
    quantity: number;

    @IsString()
    @ApiProperty()
    description: string;

    @IsNumber()
    @ApiProperty()
    wheelId: number;
}

export class PrizeReqDto extends PaginationReqDto {}