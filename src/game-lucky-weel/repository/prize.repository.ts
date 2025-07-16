import { Injectable } from "@nestjs/common";
import { BaseRepository } from "src/common/repositories/base.repository";
import { PrizeEntity } from "../entities/prize.entity";

@Injectable()
export class PrizesRepository extends BaseRepository<PrizeEntity> {}