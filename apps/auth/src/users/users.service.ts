import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
    constructor(private userRepository: UsersRepository){}

    create(createUserDto: CreateUserDto){
        return this.userRepository.create(createUserDto);
    }
}
