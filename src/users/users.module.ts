import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from './entities/users.entity';
import { TranslationModule } from 'src/translation/translation.module';

@Module({
    imports:[TypeOrmModule.forFeature([UsersEntity]),TranslationModule],
    controllers:[UsersController],
    providers: [],
    exports:[TypeOrmModule]
})
export class UsersModule {}
