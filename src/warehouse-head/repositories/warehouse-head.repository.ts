import { Injectable } from "@nestjs/common";
import { BaseRepository } from "src/common/repositories/base.repository";
import { WareHouseHead } from "../entity/warehouse-head.entity";

@Injectable()
export class WareHouseHeadRepository extends BaseRepository<WareHouseHead> { }