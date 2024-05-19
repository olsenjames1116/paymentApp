import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(username);

    if (!user) {
      throw new BadRequestException(`User '${username}' does not exist.`);
    }

    if (await bcrypt.compare(password, user.password)) {
      throw new BadRequestException('Password is incorrect.');
    }

    const { id } = user;

    return { id, username };
  }
}
