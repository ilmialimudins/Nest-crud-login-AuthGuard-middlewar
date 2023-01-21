import { Controller, Get, Body, Delete, Put, HttpCode } from '@nestjs/common';
import { UsersService } from 'src/service/users.service';
import {} from '@nestjs/common';
import { Param, Post } from '@nestjs/common/decorators';
import { UsersDto } from './userdto';
import * as bcrypt from 'bcrypt';
import { async } from 'rxjs';

@Controller('auth')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get('data')
  @HttpCode(200)
  async findAll(): Promise<any> {
    return this.userService.findAll();
  }

  @Get('view/:id')
  @HttpCode(200)
  findOneUser(@Param('id') userId: any) {
    return this.userService.findOneUser(userId);
  }

  @Get('findByUsername')
  async findByUsername(@Param() params) {
    return await this.userService.findByUsername(params.username);
  }

  @Post('insert')
  @HttpCode(200)

  async create(@Body() body: UsersDto) {
    const salt = await bcrypt.genSalt(10);
    const passSalt = await bcrypt.hash(body.password, salt);
    body.password = passSalt;
    return this.userService.createUser(body);
  }

  @Put('ubah/:id')
  @HttpCode(200)

  async Updateuser(@Param('id') id: number, @Body() body: UsersDto) {
    const salt = await bcrypt.genSalt(10);
    const passSalt = await bcrypt.hash(body.password, salt);
    body.password = passSalt;

    return this.userService.updateUser(id, body);
  }

  @Delete('delete/:id')
  async remove(@Param('id') id:any ){
    return this.userService.remove(id)
  }

}
