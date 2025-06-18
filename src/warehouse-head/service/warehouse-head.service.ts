import { Injectable } from "@nestjs/common";
import { WareHouseHeadDto } from "../dto/req/warehouse-head.dto";
import { WareHouseHeadRepository } from '../repositories/warehouse-head.repository';

@Injectable()
export class WareHouseHeadService {

    constructor(
        private readonly wareHouseHeadRepository: WareHouseHeadRepository
    ) {}

    async create(dto: WareHouseHeadDto): Promise<WareHouseHeadDto> {
        return this.wareHouseHeadRepository.save(dto);
    }

    async findOne(id: number): Promise<WareHouseHeadDto | null> {
        return this.wareHouseHeadRepository.findOneBy({id});
    }
}