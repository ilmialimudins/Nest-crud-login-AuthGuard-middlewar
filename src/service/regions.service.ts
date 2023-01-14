import { Injectable, Body } from '@nestjs/common';
import { Regions } from 'entities/Regions';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';



@Injectable()
export class RegionsService {
  constructor(
    @InjectRepository(Regions)
    private regionRepository: Repository<Regions>,
  ) {}

  //get
  async findAll(): Promise<Regions[]> {
    return this.regionRepository.find();
  }

  //get id
  async findOne(id: number): Promise<any> {
    console.log(id)
    return await this.regionRepository.findOne({  
      where: {
        regionId : id
      }
    });

  }
  //create
  create(body: any): Promise<any> {
    return this.regionRepository.save(this.regionRepository.create(body));
  }

  //update
  async update(id: number, data: Regions): Promise<any> {
    const result =  await this.regionRepository.update(
      {
        regionId : id
      },
      {
        regionName : data.regionName
      }
    )
    if(result){
      return {message: 'Data berhasil diupate'}
    }else{
      return {message: 'Data gagal diupate'}
    }
  }

  //delete
  delete(id: number): Promise<any> {
    return this.regionRepository.delete({regionId : id})
  }
}
