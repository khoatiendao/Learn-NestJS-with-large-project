import { BaseEntity } from "src/common/entities/base.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, JoinColumn } from 'typeorm';
import { GameLuckyWeelEntity } from "./game-lucky-weel.entity";

@Entity({name: 'prizes'})
export class PrizeEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({type: 'float'})
    probability: number;

    @Column({default: 1})
    quantity: number;

    @Column({nullable: true})
    description: string;

    @ManyToOne(() => GameLuckyWeelEntity, (wheel) => wheel.prizes)
    @JoinColumn({name: 'wheel_id'})
    wheel: GameLuckyWeelEntity;
}