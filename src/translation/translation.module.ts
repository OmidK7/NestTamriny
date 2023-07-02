import { Module } from '@nestjs/common';
import { TranslationController } from './translation.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TranslationEntity } from './entities/translation.entity';
import { UsersModule } from 'src/users/users.module';
import { EventModule } from 'src/event/event.module';
import { TranslationService } from './translation.service';

@Module({
    imports:[TypeOrmModule.forFeature([TranslationEntity]),UsersModule,EventModule],
    controllers:[TranslationController],
    providers:[TranslationService],
    exports:[TypeOrmModule]
})
export class TranslationModule {}
