import { Injectable } from "@nestjs/common";
import { BaseRepository } from "src/common/repositories/base.repository";
import { GameLuckyWeelEntity } from "../entities/game-lucky-weel.entity";
import { DataSource } from "typeorm";

@Injectable()
export class GameLuckyWeelRepository extends BaseRepository<GameLuckyWeelEntity> {
    constructor(dataSource: DataSource) {
        super(GameLuckyWeelEntity, dataSource);
    }
}