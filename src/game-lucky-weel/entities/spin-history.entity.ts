import { BaseEntity } from "src/common/entities/base.entity";
import { User } from "src/user/entity/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { GameLuckyWeelEntity } from "./game-lucky-weel.entity";
import { PrizeEntity } from "./prize.entity";

@Entity({name: 'spin_history'})
export class SpinHistoryEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, (user) => user.spinHistory)
    user: User;

    @ManyToOne(() => GameLuckyWeelEntity)
    wheel: GameLuckyWeelEntity;

    @ManyToOne(() => PrizeEntity, { nullable: true })
    prize: PrizeEntity;

    @CreateDateColumn()
    spinDate: Date;

    @Column({ default: false })
    isClaimed: boolean;
}