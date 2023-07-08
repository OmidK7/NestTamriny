import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventEntity } from './entities/event.entity';
import { UsersModule } from 'src/users/users.module';
import { UsersEntity } from 'src/users/entities/users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EventEntity, UsersEntity])],
  exports: [],
})
export class EventModule {}
