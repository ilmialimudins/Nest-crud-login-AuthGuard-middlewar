import { Injectable, NestMiddleware } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    if (!req.headers.authorization) {
      return res.send('you are not authentication')

    } else {
      let token = req.headers.authorization;
      try {
        jwt.verify(token, process.env.SECRET_KEY);
        console.log('Sukses');
       return next();
      } catch (err) {
        return res.status(401).json('you are not Token')

      }
    }
  }
}