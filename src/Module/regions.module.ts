import { Module } from '@nestjs/common';
import { RegionsService } from 'src/service/regions.service';
import { RegionsController } from 'src/controller/RegionController/regions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Regions } from 'entities/Regions';
import { LoginController } from 'src/login/login.controller';
import { UsersController } from 'src/controller/users/users.controller';
import { LoginService } from 'src/service/login.service';
import { UsersService } from 'src/service/users.service';
import { Users } from 'entities/Users';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Regions,Users]), UsersModule],
  controllers: [RegionsController,LoginController,UsersController],
  providers: [RegionsService,LoginService,UsersService],
})
export class RegionsModule {

  
}
