import { BaseEntity } from "src/common/entities/base.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { PrizeEntity } from "./prize.entity";

@Entity({name: 'lucky-wheel'})
export class GameLuckyWeelEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => PrizeEntity, (prize) => prize.wheel)
    prizes: PrizeEntity[]
}