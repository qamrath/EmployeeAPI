import {
  Body,
  // Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  //Query,
  // Delete,
  // Get,
  // Param,
  // Patch,
  // Post,
  // Query,
  // ParseIntPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
// import { CreateUserDto } from './dto/create.users.dto';
// import { UpdateUserDto } from './dto/update.users.dto';
// import { ValidationPipe } from '@nestjs/common';
import { users } from './schema/user.schema';
import { CreateUserDto } from './dto/create.users.dto';
import { UpdateUserDto } from './dto/update.users.dto';
//import { Query as ExpressQuery } from 'express-serve-static-core';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  // @Get()
  // async getAllEmployees(@Query() query: ExpressQuery): Promise<users[]> {
  //   return this.usersService.findAll(query);
  // }

  @Get()
  async findAll(): Promise<users[]> {
    return this.usersService.findAll();
  }

  @Post()
  async addEmployees(
    @Body()
    users: CreateUserDto,
  ): Promise<users> {
    return this.usersService.create(users);
  }

  @Get(':id')
  async getEmployeeById(
    @Param('id')
    id: string,
  ): Promise<users> {
    return this.usersService.findById(id);
  }

  @Put(':id')
  async updateEmployeeById(
    @Param('id')
    id: string,
    @Body()
    users: UpdateUserDto,
  ): Promise<users> {
    return this.usersService.updateById(id, users);
  }

  @Delete(':id')
  async DeleteEmployeeById(
    @Param('id')
    id: string,
  ): Promise<users> {
    return this.usersService.deleteById(id);
  }
  // GET for users/role?=value
  // findAll(@Query('role') role?: 'Flutter Dev' | 'React Dev' | 'Web Dev') {
  //   return this.userService.findAll(role);
  // }

  // @Get(':id') // Get users/:id
  // findOne(@Param('id', ParseIntPipe) id: number) {
  //   return this.userService.findOne(id);
  // // }
  // @Post() //POST  users/
  // create(
  //   @Body(ValidationPipe)
  //   createUserDto: CreateUserDto,
  // ) {
  //   return this.userService.create(createUserDto);
  // }

  // @Patch(':id') // PATCH users/:id
  // update(
  //   @Param('id', ParseIntPipe) id: number,
  //   @Body(ValidationPipe)
  //   updateUserDto: UpdateUserDto,
  // ) {
  //   return this.userService.update(id, updateUserDto);
  // }
  // @Delete(':id') // DELETE users/:id
  // delete(@Param('id', ParseIntPipe) id: number) {
  //   return this.userService.delete(id);
  // }
}
