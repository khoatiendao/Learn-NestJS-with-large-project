import { Body, Controller, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { PrizeService } from "../service/prizes.service";
import { PrizeCreateReqDto } from "../dto/req/prize.req.dto";

@Controller('admin/prize')
@ApiTags('Admin Prize History Manage')
export class PrizesController {
    constructor(
        private readonly prizeSerivce: PrizeService
    ) {}

    @Post()
    async create(
        @Body() dto: PrizeCreateReqDto
    ) {
        return await this.prizeSerivce.create(dto);
    }
}