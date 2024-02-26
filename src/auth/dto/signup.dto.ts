import {
  IsEmail,
  //IsEmpty,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';

export class signUpDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsEmail({}, { message: 'Please enter the valid email' })
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  readonly password: string;
}
