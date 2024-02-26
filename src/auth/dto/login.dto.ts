import {
  IsEmail,
  //IsEmpty,
  IsNotEmpty,
  MinLength,
} from 'class-validator';

export class loginDto {
  @IsNotEmpty()
  @IsEmail({}, { message: 'Please enter the valid email' })
  readonly email: string;

  @IsNotEmpty()
  @MinLength(6)
  readonly password: string;
}
