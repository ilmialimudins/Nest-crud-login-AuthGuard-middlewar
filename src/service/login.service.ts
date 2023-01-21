import { Injectable } from '@nestjs/common';
import { UsersService } from './users.service';
import * as bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'

@Injectable()
export class LoginService {
constructor(private readonly userService:UsersService){}

// async login(userName,password){
// const user = await this.userService.findByUserName(userName)
// if(user.userName){
//     if(await bcrypt.compare(password,user.password)){
//         let token = jwt.sign({items: user},process.env.SECRET_KEY)
//         return token;
//     }else{
//         return ' Password NOT MATCH'
//     }
// }else{
//     return 'username NOT FOUND'
// }
// }
async login(username, password){
    const items = await this.userService.findByUsername(username)
         if (items.userName) {
             if(await bcrypt.compare(password,items.password)){
                 // delete items.password

                 let token = jwt.sign ({items}, process.env.SECRET_KEY,{
                 expiresIn : '2m' //kadaluarsa 2menit
                 })
                 return {
                     message: 'berhasil',
                     token: token
                 }
             }else{
                 return 'password wrong'
             }
         } else {
             return 'username not found'
         }

}


}