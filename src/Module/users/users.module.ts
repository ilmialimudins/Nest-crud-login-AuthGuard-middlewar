import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'entities/Users';
import { UsersController } from 'src/controller/users/users.controller';
import { UsersService } from 'src/service/users.service';

@Module({
    imports:[TypeOrmModule.forFeature([Users])],
    controllers:[UsersController],
    providers:[UsersService],
    exports:[UsersService]
})
export class UsersModule {

    
}
