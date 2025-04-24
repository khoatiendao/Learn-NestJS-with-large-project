import { BaseRepository } from "src/common/repositories/base.repository";
import { DataSource } from "typeorm";
import { Category } from "../entities/category.entities";

export class CategoryRepository extends BaseRepository<Category> {
    constructor(dataSource: DataSource) {
        super(Category, dataSource)        
    }
}