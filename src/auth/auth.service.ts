import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model, Mongoose } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { signUpDto } from './dto/signup.dto';
import { loginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private UserModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  async signUp(SignUpDto: signUpDto): Promise<{ token: string }> {
    const { name, email, password } = SignUpDto;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await this.UserModel.create({
      name,
      email,
      password: hashedPassword,
    });

     const token = this.jwtService.sign({ id: user._id });

    return { token };
  }

  async login(loginDto: loginDto): Promise<{ token: string }> {
    const { email, password } = loginDto;
    const user = await this.UserModel.findOne({ email });
    if (!user) {
      throw new UnauthorizedException('Invalid email or password entered');
    }
    const isPasswordMatched = await bcrypt.compare(password, user.password);
    if (!isPasswordMatched) {
      throw new UnauthorizedException('Invalid  password entered');
    }
    const token = this.jwtService.sign({ id: user._id });

    return { token };
  }
}
