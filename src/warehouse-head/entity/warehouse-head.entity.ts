import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class WareHouseHead extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({name: 'quantity'})
    quantity: number
}