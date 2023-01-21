import { Injectable, NestMiddleware } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    if (!req.headers.authorization) {
      console.log('you are not auth');
      return false;
    } else {
      let token = req.headers.authorization;
      try {
        jwt.verify(token, process.env.SECRET_KEY);
        console.log('Sukses');
        next();
      } catch (err) {
        console.log('invalid token');
      }
    }
  }
}