import { Controller, Get, Query } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { SpinHistoryService } from "../service/spin-history.service";
import { SpinHistoryReqDto } from "../dto/req/spin-history.req.dto";

@Controller('/admin/spin-history')
@ApiTags('Admin Spin History Manage')
export class SpinHistoryController {
    constructor(
        private readonly spinHistoryService: SpinHistoryService
    ) { }

    @Get()
    async get(
        @Query() dto: SpinHistoryReqDto
    ) {
        return await this.spinHistoryService.get(dto);
    }

    @Get(':id')
    async getById(
        @Query() id: number
    ) {
        return await this.spinHistoryService.getById(id);
    }
}