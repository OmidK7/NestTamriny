import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TranslationModule } from './translation/translation.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:"postgres",
      host:"localhost",
      port:5432,
      database:"translation",
      username:"postgres",
      password:"postgres",
      synchronize:true,
      // logging:true
    }),
    UsersModule, TranslationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
