import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const user = await this.findOne(createUserDto.username);

    if (!user) {
      const hashedPassword = await bcrypt.hash(createUserDto.password, 10);

      createUserDto = { ...createUserDto, password: hashedPassword };

      const { id } = await this.usersRepository.save(createUserDto);

      return { id };
    } else {
      throw new ConflictException(
        `User '${createUserDto.username}' already exists.`,
      );
    }
  }

  async findOne(username: string) {
    return await this.usersRepository.findOne({
      where: { username: username },
    });
  }

  async update(
    username: string,
    pic: Express.Multer.File,
    { balance }: UpdateUserDto,
  ) {
    return { username, pic, balance };
  }
}
