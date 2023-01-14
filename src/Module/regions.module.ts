import { Module } from '@nestjs/common';
import { RegionsService } from 'src/service/regions.service';
import { RegionsController } from 'src/controller/RegionController/regions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Regions } from 'entities/Regions';

@Module({
  imports: [TypeOrmModule.forFeature([Regions])],
  controllers: [RegionsController],
  providers: [RegionsService],
})
export class RegionsModule {

  
}
