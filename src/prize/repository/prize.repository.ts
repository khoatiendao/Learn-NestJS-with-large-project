import { Injectable } from "@nestjs/common";
import { BaseRepository } from "src/common/repositories/base.repository";
import { PrizeEntity } from "../entity/prize.entity";
import { DataSource } from "typeorm";

@Injectable()
export class PrizesRepository extends BaseRepository<PrizeEntity> {
    constructor(dataSource: DataSource) {
        super(PrizeEntity, dataSource);        
    }
}