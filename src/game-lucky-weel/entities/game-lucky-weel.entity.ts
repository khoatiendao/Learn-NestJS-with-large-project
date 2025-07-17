import { BaseEntity } from "src/common/entities/base.entity";
import { PrizeEntity } from "src/prize/entity/prize.entity";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'lucky-wheel'})
export class GameLuckyWeelEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => PrizeEntity, (prize) => prize.wheel)
    @JoinColumn({name: 'prizes'})
    prizes: PrizeEntity[]
}