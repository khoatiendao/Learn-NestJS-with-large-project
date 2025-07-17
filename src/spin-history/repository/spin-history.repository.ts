import { Injectable } from "@nestjs/common";
import { BaseRepository } from "src/common/repositories/base.repository";
import { SpinHistoryEntity } from "../entity/spin-history.entity";
import { DataSource } from "typeorm";

@Injectable()
export class SpinHistoryRepository extends BaseRepository<SpinHistoryEntity> {
    constructor(dataSource: DataSource) {
        super(SpinHistoryEntity, dataSource);        
    }
}