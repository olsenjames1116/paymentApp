import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const user = await this.usersRepository.findOne({
      where: { username: createUserDto.username },
    });

    if (!user) {
      const newUser = await this.usersRepository.save(createUserDto);

      return { id: newUser.id };
    }

    throw new ConflictException(
      `User '${createUserDto.username}' already exists.`,
    );
  }

  findAll() {
    return this.usersRepository.find();
  }
}
