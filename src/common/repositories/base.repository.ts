import { DataSource, EntityTarget, FindManyOptions, FindOneOptions, FindOptions, ObjectLiteral, Repository } from "typeorm";

export abstract class BaseRepository<T extends ObjectLiteral> extends Repository<T> {
    constructor(entity: EntityTarget<T>, dataSource: DataSource) { 
        super(entity, dataSource.createEntityManager());
    }

    async findFirst(options: FindOneOptions<T>) {
        return super.findOne(options);
    }

    async findAll(options: FindManyOptions<T>) {
        return super.find(options);
    }
}