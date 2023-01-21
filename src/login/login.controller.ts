import { Body, Controller, Post } from '@nestjs/common';
import { LoginService } from 'src/service/login.service';

@Controller('login')
export class LoginController {
constructor(
    private readonly loginService:LoginService
){}



@Post()
    login(@Body() alog){
        this.loginService.login(alog.userName, alog.password)
    }

}

