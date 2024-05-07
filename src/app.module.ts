import { Module } from '@nestjs/common';

import { UserModule } from './user/user.module';
import { UsersService } from './user/services/users/users.service';

@Module({
  imports: [UserModule],
  providers: [UsersService],

})
export class AppModule {}
