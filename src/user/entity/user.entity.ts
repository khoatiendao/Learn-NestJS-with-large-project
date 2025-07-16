import { SpinHistoryEntity } from "src/game-lucky-weel/entities/spin-history.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'user'})
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    email: string

    @Column()
    password: string

    @Column({ default: 0 })
    spinCount: number;

    @OneToMany(() => SpinHistoryEntity, (spinHistory) => spinHistory.user)
    spinHistory: SpinHistoryEntity[];
}