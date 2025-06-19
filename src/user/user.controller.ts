import { Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserDto } from './dto/req/user.dto.req';
import { UserService } from './user.service';

@ApiTags('User')
@Controller('User')
export class UserController {

    constructor(
        private userService: UserService
    ) {}

    @Post('/register')
    async register(dto: UserDto) {
        return this.userService.register(dto)
    }

    @Post('/login')
    async login(dto: UserDto) {
        return this.userService.login(dto);
    }
}
