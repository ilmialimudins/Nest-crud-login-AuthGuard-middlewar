// import { Strategy } from 'passport-local';
// import { PassportStrategy } from '@nestjs/passport';
// import { Injectable, UnauthorizedException } from '@nestjs/common';
// import { AuthService } from './auth.service';

// @Injectable()
// export class LocalStrategy extends PassportStrategy(Strategy) {
//   constructor(private authService: AuthService) {
//     super();
//   }

//   async validate(username: string, password: string): Promise<any> {
//     // const user1 = this.authService.validateUser()
//     const user = await this.authService.validateUser(username, password);
//     console.log(user + 'dari ls');
    
//     if (!user) {
//       throw new UnauthorizedException();
//     }
//     return user;
//   }
// }