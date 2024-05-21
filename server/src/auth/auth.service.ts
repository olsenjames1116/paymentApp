import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    console.log(username, password);
    const user = await this.usersService.findOne(username);
    console.log(user);

    if (!user) {
      throw new UnauthorizedException(`User '${username}' does not exist.`);
    }

    if (await bcrypt.compare(password, user.password)) {
      const { id } = user;

      return { id, username };
    } else {
      throw new UnauthorizedException('Password is incorrect.');
    }
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
