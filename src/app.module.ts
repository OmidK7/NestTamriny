import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TranslationModule } from './translation/translation.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '172.17.0.2',
      port: 5432,
      database: 'translationdb',
      username: 'postgres',
      password: 'postgres',
      synchronize: true,
      entities: [`${__dirname}/**/*.entity{.ts,.js}`],
    }),
    UsersModule,
    TranslationModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
