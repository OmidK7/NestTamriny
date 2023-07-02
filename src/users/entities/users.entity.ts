import { IsString } from 'class-validator';
import { EventEntity } from 'src/event/entities/event.entity';
import { TranslationEntity } from 'src/translation/entities/translation.entity';
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class UsersEntity {
  @IsString()
  @PrimaryGeneratedColumn()
  id: number;

  @IsString()
  @Column()
  name: string;

  @JoinTable()
  @ManyToMany(() => TranslationEntity,(translation) =>translation.users)
    translations: TranslationEntity[];

    @OneToMany(() => EventEntity,(event)=>event.user)
    events: EventEntity[]
}
