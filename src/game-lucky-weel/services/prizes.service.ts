import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { PrizesRepository } from "../repository/prize.repository";
import { PrizeCreateReqDto } from "../dto/prize-dto/req/prize.req.dto";
import { GameLuckyWeelRepository } from "../repository/game-lucky-weel.repository";

@Injectable()
export class PrizeService {
    constructor(
        private readonly prizesRepo: PrizesRepository,
        private readonly gameLuckyWeelRepo: GameLuckyWeelRepository
    ) { }

    async create(dto: PrizeCreateReqDto) {
        const findWheel = await this.gameLuckyWeelRepo.findOne({
            where: { id: dto.wheelId }
        });

        if (!findWheel) {
            throw new HttpException('Wheel not found', HttpStatus.NOT_FOUND);
        }
        
        const prizesCreate = await this.prizesRepo.save(dto);
        return prizesCreate;
    }
}