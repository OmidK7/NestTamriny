import { Module } from '@nestjs/common';
import { TranslationController } from './translation.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TranslationEntity } from './entities/translation.entity';
import { TranslationService } from './translation.service';
import { UsersEntity } from 'src/users/entities/users.entity';

@Module({
    imports:[TypeOrmModule.forFeature([TranslationEntity,UsersEntity])],
    controllers:[TranslationController],
    providers:[TranslationService],
    exports:[]
})
export class TranslationModule {}
