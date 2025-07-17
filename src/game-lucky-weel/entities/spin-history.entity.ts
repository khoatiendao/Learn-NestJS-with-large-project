import { BaseEntity } from "src/common/entities/base.entity";
import { User } from "src/user/entity/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { GameLuckyWeelEntity } from "./game-lucky-weel.entity";
import { PrizeEntity } from "src/prize/entity/prize.entity";

@Entity({name: 'spin_history'})
export class SpinHistoryEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, (user) => user.spinHistory)
    @JoinColumn({ name: 'user_id' }) // Thêm JoinColumn
    user: User;

    @ManyToOne(() => GameLuckyWeelEntity)
    @JoinColumn({ name: 'wheel_id' })
    wheel: GameLuckyWeelEntity;

    @ManyToOne(() => PrizeEntity, { nullable: true })
    @JoinColumn({ name: 'prize_id' })
    prize: PrizeEntity;

    @CreateDateColumn()
    spinDate: Date;

    @Column({ default: false })
    isClaimed: boolean;
}