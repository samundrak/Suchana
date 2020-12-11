import { IsAlphanumeric, IsEmail, MinLength } from 'class-validator';

export class AuthCredentialsDto {
  @IsEmail()
  username: string;

  @IsAlphanumeric()
  @MinLength(8)
  password: string;
}
