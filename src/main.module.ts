import 'dotenv/config';
import { Module } from '@nestjs/common';
import { AppController } from './controller/AppController/app.controller';
import { AppService } from './service/app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegionsModule } from './Module/regions.module';
import { LoginController } from './controller/AuthController/login.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.HOST,
      port: parseInt(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USER,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      entities: [`dist/entities/*{.ts,.js}`],
      synchronize: false,
    }),
    RegionsModule,
  ],
  controllers: [AppController, LoginController],
  providers: [AppService],
})
export class MainModule {}
