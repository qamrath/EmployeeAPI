//import { IsEmail, IsString, IsEmpty } from 'class-validator';
import { DEPARTMENT } from '../schema/user.schema';

export class CreateUserDto {
  // @IsString()
  // @IsEmpty()
  readonly name: string;
  //@IsEmail()
  readonly email: string;

  readonly department: DEPARTMENT;
  readonly role: string;

  // @IsEnum(['Flutter Dev', 'React Dev', 'Web Dev'], {
  //   message: 'Valid role required',
  // })
  // role: 'Flutter Dev' | 'React Dev' | 'Web Dev';
}
