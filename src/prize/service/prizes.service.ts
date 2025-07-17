import { HttpException, HttpStatus, Injectable, NotFoundException } from "@nestjs/common";
import { PrizesRepository } from "../repository/prize.repository";
import { PrizeCreateReqDto, PrizeReqDto, UpdatePrizeReqDto } from "../dto/req/prize.req.dto";
import { GameLuckyWeelRepository } from "../../game-lucky-weel/repository/game-lucky-weel.repository";
// import { paginate } from "nestjs-typeorm-paginate";
import { AppResponseDto } from "src/common/dtos/app-response.dto";

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

    async getList(dto: PrizeReqDto) {
        const { name } = dto;

        const queryBuilder = this.prizesRepo
            .createQueryBuilder('prizes')
            .orderBy('prizes.createAt', 'DESC');

        if (name) {
            queryBuilder.andWhere('prizes.name ILIKE :name', {
                name: `%${name}%`
            })
        }

        return new AppResponseDto(queryBuilder);
    };

    async getById(id: number) {
        const prizes = this.prizesRepo.findOneOrThrowNotFoundExc({
            where: { id: id }
        });

        return new AppResponseDto(prizes);
    };

    async update(id: number, dto: UpdatePrizeReqDto) {
        const prizes = await this.prizesRepo.findOneOrThrowNotFoundExc({
            where: { id: id }
        });

        const prizesUpdate = await this.prizesRepo.save(
            this.prizesRepo.merge(prizes, dto)
        );

        return await this.getById(prizesUpdate.id);
    };

    async deleteById(id: number) {
        const { affected } = await this.prizesRepo.softDelete({
            id,
        });

        if (!affected) throw new NotFoundException({ message: 'common.exc.notFound' });

        return new AppResponseDto('ok');
    }
}