/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { Query } from 'express-serve-static-core';

// import { CreateUserDto } from './dto/create.users.dto';
// import { UpdateUserDto } from './dto/update.users.dto';

import { InjectModel } from '@nestjs/mongoose';
import { users } from './schema/user.schema';
import * as mongoose from 'mongoose';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(users.name)
    private usersModel: mongoose.Model<users>,
  ) {}

  async findAll():Promise<users[]>{
    const employees = await this.usersModel.find();
    return employees;

  }

  // async findAll(query: Query): Promise<users[]> {
  //   const resPerPage = 2;
  //   const currentPage = Number(query.page || 1);
  //   const skip = resPerPage * (currentPage - 1);
  //   const keyword = query.keyword
  //     ? {
  //         name: {
  //           $regex: query.keyword,
  //           $options: 'i',
  //         },
  //       }
  //     : {};
  //   const employees = await this.usersModel
  //     .find({ ...keyword })
  //     .limit(resPerPage)
  //     .skip(skip);
  //   return employees;
  // }

  async create(users: users): Promise<users> {
    const res = await this.usersModel.create(users);
    return res;
  }

  async findById(id: string): Promise<users> {
    const getEmp = await this.usersModel.findById(id);

    if (!getEmp) {
      throw new NotFoundException('Employee not found !!');
    }
    return getEmp;
  }

  async updateById(id: string, users: users): Promise<users> {
    const updateEmp = await this.usersModel.findByIdAndUpdate(id, users, {
      new: true,
      runValidators: true,
    });
    return updateEmp;
  }

  async deleteById(id: string): Promise<users> {
    const deleteEmp = await this.usersModel.findByIdAndDelete(id);
    return deleteEmp;
  }

  //   private users = [
  //     {
  //       id: 1,
  //       name: 'Shanaya',
  //       email: 'shanaya@gmail.com',
  //       role: 'React Dev',
  //     },
  //     {
  //       id: 2,
  //       name: 'Shayaan',
  //       email: 'shayaan23@gmail.com',
  //       role: 'React Dev',
  //     },
  //     {
  //       id: 3,
  //       name: 'Pari',
  //       email: 'parinat@gmail.com',
  //       role: 'Web Dev',
  //     },
  //     {
  //       id: 4,
  //       name: 'Ritu',
  //       email: 'Ritu12@gmail.com',
  //       role: 'React Dev',
  //     },
  //     {
  //       id: 5,
  //       name: 'Seema',
  //       email: 'seema@gmail.com',
  //       role: 'Flutter Dev',
  //     },
  //     {
  //       id: 6,
  //       name: 'Kashish',
  //       email: 'kashish12@gmail.com',
  //       role: 'QA ',
  //     },
  //   ];

  //   findAll(role?: 'Flutter Dev' | 'React Dev' | 'Web Dev') {
  //     if (role) {
  //       const roleArray=  this.users.filter((user) => user.role === role);
  //       if(roleArray.length===0) throw new NotFoundException('Required User Role not Found!!')
  //       return roleArray
  //     }
  //     return this.users;
  //   }

  //   findOne(id: number) {
  //     const user = this.users.find((user) => user.id === id);
  //     if(!user) throw new NotFoundException('User not found!!')
  //     return user;
  //   }
  //   create(createUserDto: CreateUserDto) {
  //     console.log(createUserDto);
  //     // Copy the existing users array and sort it in descending order based on the 'id' property
  //     const userByHighestId = [...this.users].sort((a, b) => b.id - a.id);

  //     // Create a new user object with an 'id' higher than the highest existing 'id'
  //     const newUser = {
  //       id: userByHighestId[0].id + 1,
  //       ...createUserDto,
  //     };

  //     // Add the new user to the users array
  //     this.users.push(newUser);

  //     //console.log(newUser);
  //     return newUser;
  //   }

  //   update(id: number, updateUserDto: UpdateUserDto) {
  //     const index = this.users.findIndex((user) => user.id === id);

  //     if (index !== -1) {
  //       // If user is found, update the properties
  //       this.users[index] = {
  //         ...this.users[index],
  //         ...updateUserDto,
  //       };

  //       // Return the updated user
  //       return this.users[index];
  //     } else {
  //       // If user is not found, return null or throw an exception
  //       // Depending on your use case
  //       return null;
  //     }
  //   }

  //   delete(id: number) {
  //     // Find the user to be removed using the findOne method
  //     const removeUser = this.findOne(id);

  //     // Check if the user was found
  //     if (!removeUser) {
  //       console.log(`User with id ${id} not found.`);
  //       return {
  //         message: `User with id ${id} Not found.`,
  //         status: 'failed',
  //       };
  //     }

  //     // Update the users array by filtering out the user with the specified id
  //     this.users = this.users.filter((user) => user.id !== id);

  //     // Log and return the removed user
  //     console.log(removeUser);
  //     return {
  //       message: `User with id ${id} deleted successfully.`,
  //       success: true,
  //     };
  //   }
}
