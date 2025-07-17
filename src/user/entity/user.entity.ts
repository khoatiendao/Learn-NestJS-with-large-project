import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { SpinHistoryEntity } from '../../spin-history/entity/spin-history.entity';

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
    @JoinColumn({name: 'spin_history'})
    spinHistory: SpinHistoryEntity[];    
}