import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Users } from 'entities/Users';
import { UsersService } from 'src/service/users.service';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  constructor(
    // private userService: UsersService,
    // private jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {}

  //dipanggil sama local.strategy
  // async validateUser(pusername, ppassword) {
    // console.log(username+ 'di b');

  //   const user = await this.userService.findOneUser(pusername);
  //   // console.log(user);

  //   if (user) {
  //     //cek password
  //     if (bcrypt.compareSync(ppassword, user.password)) {
  //       // console.log('masuk' + ppasword);
  
  //       return user;
  //     } else {
    //       // return 'password salah'
  //     }
  //   } else {
  //     //return 'username tidak tersedia'
  //     return null;
  //   }
  // }

  // async login(user: any) {
  //   const payload = { username: user.username };
  //   return {
      
  //     message: 'login success!',
  //     //ambil token yang nantinya dimasukin ke headers di postman
  //     access_token: this.jwtService.sign(payload),
  //   };
  // }

  
  //new
  async login(username, password) {
    const items = await this.usersService.findByUsername(username);
    if(!items){
      return {message:'username not found'}
    }else{
      if( await bcrypt.compare(password, items.password)){
        delete items.password;
        
        let token =jwt.sign({items}, process.env.SECRET_KEY,{
          expiresIn: "2m", //kadaluarsa 2 menit
        });
        return {
          message: "berhasil",
          token:token,
        };
      }else{
        return {message : "password wrong"}
      }

    }

    
    
    
    // if (items.userName) {
    //   console.log(items)
    //   if (await bcrypt.compare(password, items.password)) {
    //     // delete items.password;
        
    //     let token = jwt.sign({ items }, process.env.SECRET_KEY, {
    //       expiresIn: '2m', //kadaluarsa 2menit
    //     });
    //     return {
    //       message: 'berhasil',
    //       token: token,
    //     };
    //   } else {
    //     return 'password wrong';
    //   }
    // } else {
    //   return 'username not found';
    // }
  }

}
