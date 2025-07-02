import { Controller, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CategoryService } from "../services/category.service";
import { CategoryCustomerReqDto } from "../dtos/customer/req/category-customer.dto.req";


@ApiTags('Category')
@Controller('Category')
export class CategoryController {
    constructor(
        private readonly categoryService: CategoryService
    ) {}    

    @Post()
    create(dto: CategoryCustomerReqDto) {
        return this.categoryService.create(dto);
    }
}