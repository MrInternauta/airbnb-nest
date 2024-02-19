import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { UsersService } from '../users/users.service';
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
  constructor(private readonly userSevice: UsersService) {
    super({ usernameField: 'email' });
  }
  async validate(email: string, password: string) {
    try {
      return await this.userSevice.validateUser(email, password);
    } catch (error) {
      console.log(error);
      throw new UnauthorizedException(error);
    }
  }
}
