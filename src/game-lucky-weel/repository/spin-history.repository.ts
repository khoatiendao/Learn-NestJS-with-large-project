import { Injectable } from "@nestjs/common";
import { BaseRepository } from "src/common/repositories/base.repository";
import { SpinHistoryEntity } from "../entities/spin-history.entity";

@Injectable()
export class SpinHistoryRepository extends BaseRepository<SpinHistoryEntity> {}