import { Module } from "@nestjs/common";
import { PrizesController } from "./controller/prize.controller";
import { PrizeService } from "./service/prizes.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PrizeEntity } from "./entity/prize.entity";
import { PrizesRepository } from "./repository/prize.repository";
import { GameLuckyWeelRepository } from "src/game-lucky-weel/repository/game-lucky-weel.repository";


@Module({
    imports: [
        TypeOrmModule.forFeature([PrizeEntity]),
    ],
    controllers: [PrizesController],
    providers: [PrizeService, PrizesRepository, GameLuckyWeelRepository]
})
export class PrizeModule { }