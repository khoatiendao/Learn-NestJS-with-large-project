import { DataSource, Repository } from "typeorm";
import { User } from "../entity/user.entity";
import { Injectable } from "@nestjs/common";
import { BaseRepository } from "src/common/repositories/base.repository";

@Injectable()
export class UserRepository extends BaseRepository<User> {
    constructor(dataSource: DataSource) {
        super(User, dataSource);        
    }
}