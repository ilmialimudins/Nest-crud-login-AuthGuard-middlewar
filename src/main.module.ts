import 'dotenv/config';
import { Module,NestModule,MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './controller/AppController/app.controller';
import { AppService } from './service/app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegionsModule } from './Module/regions.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './Module/users/users.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthMiddleware } from './auth/auth.middleware';


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
    AuthModule,
    UsersModule
  ],
  controllers: [AppController ],
  providers: [AppService ],

})
export class MainModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer .apply(AuthMiddleware)
    .forRoutes('login')
  }
}
