import { IsOptional, IsString } from 'class-validator';
import { EventEntity } from 'src/event/entities/event.entity';
import { TranslationEntity } from 'src/translation/entities/translation.entity';
import { Column, Entity, JoinTable, ManyToMany, OneToMany } from 'typeorm';

@Entity('user')
export class UsersEntity {
  @IsString()
  @Column({ nullable: true })
  name?: string;

  @IsString()
  @Column()
  password: string;

  @IsString()
  @Column({ nullable: true })
  age?: number;

  @IsString()
  @Column()
  Phone_number: string;

}
