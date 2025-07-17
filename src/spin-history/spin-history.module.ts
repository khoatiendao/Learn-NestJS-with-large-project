import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SpinHistoryEntity } from "./entity/spin-history.entity";
import { SpinHistoryController } from "./controller/spin-history.controller";
import { SpinHistoryService } from "./service/spin-history.service";
import { SpinHistoryRepository } from "./repository/spin-history.repository";

@Module({
    imports: [
        TypeOrmModule.forFeature([SpinHistoryEntity]),
    ],
    controllers: [SpinHistoryController],
    providers: [SpinHistoryService, SpinHistoryRepository]
})
export class SpinHistoryModule { }