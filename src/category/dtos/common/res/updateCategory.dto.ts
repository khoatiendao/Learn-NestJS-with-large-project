import { PartialType } from "@nestjs/mapped-types";
import { CreateCategoryDto } from "./common.dto";

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {}