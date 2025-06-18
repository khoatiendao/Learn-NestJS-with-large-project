import { Module } from "@nestjs/common";
import { WareHouseHeadController } from "./controller/warehouse-head.controller";
import { WareHouseHeadService } from "./service/warehouse-head.service";
import { WareHouseHeadRepository } from "./repositories/warehouse-head.repository";

@Module({
  imports: [],
  controllers: [WareHouseHeadController],
  providers: [WareHouseHeadService, WareHouseHeadRepository],
})
export class WareHouseHeadModule { }