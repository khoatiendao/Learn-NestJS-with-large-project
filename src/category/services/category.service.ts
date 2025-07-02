import { Injectable } from "@nestjs/common";
import { CategoryRepository } from "../repositories/category.repository";
import { CategoryCustomerReqDto } from "../dtos/customer/req/category-customer.dto.req";

@Injectable()
export class CategoryService {
    constructor(
        private readonly categoryRepo: CategoryRepository
    ) {}

    async create(dto: CategoryCustomerReqDto) {
        return this.categoryRepo.save(dto);
    }
}