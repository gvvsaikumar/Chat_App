import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UserController } from './controllers/user/user.controller';
import { UsersService } from './services/users/users.service';
import { ExampleMiddleware } from './middlewares/example/example.middleware';
import { AnotherMiddleware } from './middlewares/another/another.middleware';

@Module({
  controllers: [UserController],
  providers: [UsersService]
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ExampleMiddleware).forRoutes(
      {
        path:'users',
        method:RequestMethod.GET,
      },
      {
        path:'users/:id',
        method:RequestMethod.GET,
      }
    ).apply(AnotherMiddleware).forRoutes(
      {
        path:'users',
        method:RequestMethod.GET,
      },
      {
        path:'users/:id',
        method:RequestMethod.GET,
      }
    );
  }
}
