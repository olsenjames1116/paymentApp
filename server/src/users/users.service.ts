import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const user = await this.findOne(createUserDto.username);

    if (!user) {
      bcrypt.hash(user.password, 10, async (err, hashedPassword) => {
        if (err) {
          throw new InternalServerErrorException(err);
        } else {
          user.password = hashedPassword;
        }
      });

      const { id } = await this.usersRepository.save(user);

      return id;
    }

    throw new ConflictException(
      `User '${createUserDto.username}' already exists.`,
    );
  }

  async findAll() {
    return await this.usersRepository.find();
  }

  async findOne(username: string) {
    return await this.usersRepository.findOne({
      where: { username: username },
    });
  }
}
