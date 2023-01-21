import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Users } from 'entities/Users';
import { Repository, ReturningStatementNotSupportedError } from 'typeorm';
import { UsersDto } from 'src/controller/users/userdto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  
  constructor(
    @InjectRepository(Users)
    private userRepository: Repository<Users>,
  ) {}


  async findByUsername(username: any): Promise<any> {
    return await this.userRepository.findOneBy({ userName: username });
  }
  //cari semua data
  async findAll(): Promise<Users[]> {
    return this.userRepository.find();
  }

  //cari by id
  async findOneUser(userId: number): Promise<any> {
    //console.log(username.username)
    const result = await this.userRepository.findOne({
      where: { userId: userId },
    });
    if (result) {
      return result;
    }
    throw new HttpException('User Not found', HttpStatus.NOT_FOUND);
  }

  //cari nama
  async findOneName(username: UsersDto) {
    return await this.userRepository.findOne({
      where: { userName: username.username },
    });
  }

  //create
  async createUser(data: UsersDto) {
    const result = await this.userRepository.insert({
      userName: data.username,
      password: data.password,
    });
    if(result){
      return{message:'Data berhasil ditambah'}
    }else{
      return{message:'Data Gagal dibuat'}
    }
  }

  //mengubah data
  async updateUser(userId:number, data:UsersDto){
    const result = await this.userRepository.update({
        userId:userId
    },{
        userName:data.username,
        password: data.password

    });
    const getNewData= await this.userRepository.findOne({
        where:{userId:userId},
    })
    if (result.affected){
        return getNewData;
    }else{
        throw new HttpException('user not Found', HttpStatus.NOT_FOUND)
    }
  }


  //delete
  async remove(id: number): Promise<any> {
    await this.userRepository.delete({userId:id});
    return "berhasil hapus data";
  }
}
