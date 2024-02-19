import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { DatabaseModule, LoggerModule } from '@app/common';
import { UserSchemaDocument, UserSchema } from './users/models/users.schema';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersRepository } from './users/users.repository';

@Module({
  imports: [
    LoggerModule,
    DatabaseModule,
    DatabaseModule.forFeature([
      { name: UserSchemaDocument.name, schema: UserSchema },
    ]),
  ],
  controllers: [AuthController, UsersController],
  providers: [AuthService, UsersService, UsersRepository],
})
export class AuthModule {}
