import { Controller, Post, UseGuards, Request, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { Users } from 'entities/Users';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  //karena pake passport , jadi tiap ngakses link auth/ login akan masuk ke file local.strategy
  // buat cek authorization

  // @UseGuards(AuthGuard('local'))
  // @Post('login')
  // async login(@Request() req: any) {
  //   //ambil request dari body di postman
  //   // console.log('tes isi '+req);
  //   // return req.user

  //   return this.authService.login(req.user); // masuk auth service buat dapet token
  // }

  @Post('login')
  login(@Body() body): Promise<any> {
    return this.authService.login(body.username, body.password);
  }
}
