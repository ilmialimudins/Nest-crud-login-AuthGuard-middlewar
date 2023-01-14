import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Ilmi Alimudin!';
  }
  getTambah(angka1: number, angka2: number): number {
    return angka1 + angka2;
  }
  getKali(upah: number, hari: number): number {
    return upah * hari;
  }
}
