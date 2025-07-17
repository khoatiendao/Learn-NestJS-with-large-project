import { Injectable } from "@nestjs/common";
import { SpinHistoryRepository } from "../repository/spin-history.repository";
import { SpinHistoryReqDto } from "../dto/req/spin-history.req.dto";
import { AppResponseDto } from "src/common/dtos/app-response.dto";
import { paginate } from "nestjs-typeorm-paginate";

@Injectable()
export class SpinHistoryService {
    constructor(
        private readonly spinHistoryRepo: SpinHistoryRepository
    ) { }

    async get(dto: SpinHistoryReqDto) {
        const { limit, page } = dto;

        const queryBuilder = this.spinHistoryRepo
            .createQueryBuilder('spinHistory')
            .orderBy('spinHistory.spinDate', 'DESC');                

        return queryBuilder;
    };
    
    async getById(id: number) {
        const spinHistory = this.spinHistoryRepo.findOneOrThrowNotFoundExc({
            where: { id: id }
        });

        return new AppResponseDto(spinHistory);
    }
}