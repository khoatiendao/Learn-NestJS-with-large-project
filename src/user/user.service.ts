import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from './repositories/user.repositories';
import { UserDto } from './dto/req/user.dto.req';
import { EncryptService } from 'src/utils/service/encrypt.service';
import { HASH_ROUND } from 'src/common/constants/global.constants';

@Injectable()
export class UserService {

    constructor(
        private readonly userRepository: UserRepository,
        private encryptService: EncryptService,
    ) {}

    async register(dto: UserDto) {
            
        const findEmail = await this.userRepository.findOne({
            where: {email: email}
        });
        if(findEmail) {
            throw new UnauthorizedException({message: 'Email exists'})
        }
        const encryptPassword = this.encryptService.encryptText(password, HASH_ROUND)
        const newDto = {email, encryptPassword};
        return await this.userRepository.save(newDto);
    }

    async login(dto: UserDto) {
        const {email, password} = dto;
        const find = await this.userRepository.findOne({
            where: {email: email}
        });
        if(!find?.email) {
            throw new UnauthorizedException({message: 'Email not found'})
        }        
        const comaprePassword = this.encryptService.compareHash(password, find?.password)
        if(!comaprePassword) {
            throw new UnauthorizedException({message: 'Password not match'})
        } else {
            return {message: 'Login thành công'}
        }
    }
}
