// import { CreateUserDto } from './create.users.dto';
// import { PartialType } from '@nestjs/mapped-types';
// //When a client sends a request to create a new user, the server would expect the data to match the structure defined in this DTO.
// export class UpdateUserDto extends PartialType(CreateUserDto) {}

import { DEPARTMENT } from '../schema/user.schema';

export class UpdateUserDto {
  readonly name: string;

  readonly email: string;

  readonly department: DEPARTMENT;
  readonly role: string;
}
