import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from './entities/users.entity';
import { TranslationEntity } from 'src/translation/entities/translation.entity';
import { UsersService } from './users.service';

@Module({
    imports:[TypeOrmModule.forFeature([UsersEntity,TranslationEntity])],
    controllers:[UsersController],
    exports:[],
    providers: [UsersService]
})
export class UsersModule {}
