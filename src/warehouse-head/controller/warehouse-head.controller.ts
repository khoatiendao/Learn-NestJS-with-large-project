import { Controller, Get, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { WareHouseHeadService } from "../service/warehouse-head.service";
import { WareHouseHeadDto } from "../dto/req/warehouse-head.dto";

@ApiTags('WareHouseHead')
@Controller('WareHouseHead')
export class WareHouseHeadController {
    constructor(
        private readonly wareHouseHeadService: WareHouseHeadService
    ) {}

    @Get(':id')
    get(id: number) {
        return this.wareHouseHeadService.findOne(id);
    }

    @Post()
    create(dto: WareHouseHeadDto) {
        return this.wareHouseHeadService.create(dto);
    }
}