import { IsDate, IsOptional, IsString } from "class-validator";
import { UsersEntity } from "src/users/entities/users.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

export enum EventTypeEnum{
    LIKE = 'LIKE',
    COMMENT = 'COMMENT'
} 

@Entity('event')
export class EventEntity{
    @IsString()
    @PrimaryGeneratedColumn()
    id : number

    @IsString()
    @Column()
    type : EventTypeEnum;

    @IsDate()
    @CreateDateColumn()
    @IsOptional()
    createdAt?: Date

}