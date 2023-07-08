import { OmitType, PartialType, PickType } from '@nestjs/mapped-types';
import { IsDate, IsString } from 'class-validator';
import { UsersEntity } from 'src/users/entities/users.entity';
import { Column, CreateDateColumn, Entity, ManyToMany } from 'typeorm';

@Entity('translation')
export class TranslationEntity {
    
  @IsString()
  @Column({ primary: true })
  id: string;

  @IsString()
  @Column()
  phrase: string;

  @IsString()
  @Column()
  translation: string;

  @IsString()
  @Column()
  fromLang: string;

  @IsString()
  @Column()
  toLang: string;

  @IsDate()
  @CreateDateColumn()
  createdAt: Date;


}

export class translationUpdateDTO extends PartialType(
  OmitType(TranslationEntity, ['createdAt'] as const),
) {}

export class translationDeletDTO extends PickType(TranslationEntity, [
  'id',
] as const) {}
