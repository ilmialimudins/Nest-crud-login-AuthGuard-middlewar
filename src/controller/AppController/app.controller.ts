import { Controller, Get } from '@nestjs/common';
import { AppService } from '../../service/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hai')
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('tambah')
  getTambah(): number {
    return this.appService.getTambah(1, 2);
  }
  @Get('kali')
  getKali(): number {
    return this.appService.getKali(500000, 30);
  }
}
