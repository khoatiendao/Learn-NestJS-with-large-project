import { BaseEntity } from "src/common/entities/base.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'category'})
export class Category extends BaseEntity {
    @PrimaryGeneratedColumn({name: 'id'})
    id: number;

    @Column({name: 'name', length: 255})
    name: string;

    @Column({name: 'priority', default: 0})
    priority: number;
}