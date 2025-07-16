import { IsNumber } from "class-validator";

export abstract class PaginationReqDto {
  @IsNumber()
  page?: number = 1;

  @IsNumber()
  limit?: number = 20;
}

// https://aalonso.dev/blog/how-to-generate-generics-dtos-with-nestjsswagger-422g
export class PaginationResDto {
  items: any[];

  meta: {
    itemCount: number;
    totalItems?: number;
    itemsPerPage: number;
    totalPages?: number;
    currentPage: number;
  };

  links?: {
    first?: string;
    previous?: string;
    next?: string;
    last?: string;
  };
}