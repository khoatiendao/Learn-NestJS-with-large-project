import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsStrongPassword } from "class-validator";

export class UserDto {
    @IsEmail()
    @ApiProperty()
    email: string

    @IsStrongPassword()
    @ApiProperty()
    password: string
}