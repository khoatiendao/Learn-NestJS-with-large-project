import { Repository } from "typeorm";
import { Category } from "../entities/category.entities";

export class CategoryRepository extends Repository<Category> {}