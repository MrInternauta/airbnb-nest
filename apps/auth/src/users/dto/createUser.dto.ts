import { IsEmail, IsStrongPassword, IsOptional, IsNotEmpty, IsString, IsArray } from 'class-validator';

export class CreateUserDto {
    @IsEmail()
    email: string;

    @IsStrongPassword()
    password: string;

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    @IsNotEmpty({ each: true })
    roles?: string[];
}