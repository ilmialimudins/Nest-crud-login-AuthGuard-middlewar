import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {  RegionsService } from 'src/service/regions.service';
import {} from '@nestjs/common';

@Controller('regions')
export class RegionsController {
  constructor(private regionService: RegionsService) {}
//get all
  @Get('hai')
  async findAll(): Promise<any> {
    return this.regionService.findAll();
  }
 
  //get id
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.regionService.findOne(id);
  }

  //create
  @Post('create')
  async create(@Body() body: any){
    const regions = await this.regionService.create(body);
    if (!regions) {
      return ' Gagal dalam membuat regions';
    }
    return 'regions berhasil dibuat';
  }

  //update
  @Put(':id')
  async update(@Param('id') id: number, @Body() body: any) {

    // console.log(id, body)
    return await this.regionService.update(id, body);
  }
  //delete
  @Delete(':id')
  async remove(@Param('id') id: number) {
    return 'Regions Telah Dihapus' + this.regionService.delete(id);
  }
}
