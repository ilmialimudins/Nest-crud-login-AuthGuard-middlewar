import { Module } from '@nestjs/common';
import { RegionsService } from 'src/service/regions.service';
import { RegionsController } from 'src/controller/RegionController/regions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Regions } from 'entities/Regions';
import { UsersController } from 'src/controller/users/users.controller';
import { UsersService } from 'src/service/users.service';
import { Users } from 'entities/Users';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Regions,Users]), UsersModule],
  controllers: [RegionsController,UsersController],
  providers: [RegionsService,UsersService],
})
export class RegionsModule {

  
}
