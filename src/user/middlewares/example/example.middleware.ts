import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { Request,Response,NextFunction } from 'express';

@Injectable()
export class ExampleMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next:NextFunction) {
    console.log('example Middeleware');
    console.log(req.headers.authorization);
    const {authorization} = req.headers;
    if(!authorization)
      throw new HttpException('no authorization Token',HttpStatus.FORBIDDEN);
    if(authorization === 'saikumar') next();
    else
      throw new HttpException(
        "invalid Authorization Token",
        HttpStatus.FORBIDDEN,
      );
    
  }
}
