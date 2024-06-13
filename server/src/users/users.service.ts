import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { deleteFile, uploadFile } from '../../aws-s3';

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

  async updatePic(username: string, profilePic: Express.Multer.File) {
    const { Location } = await uploadFile(profilePic);

    const user = await this.findOne(username);
    const url = new URL(user.pic);

    user.pic = Location;

    try {
      const updatedUser = await this.usersRepository.save(user);

      await deleteFile(url.pathname.slice(1));

      return {
        username: updatedUser.username,
        pic: updatedUser.pic,
        balance: updatedUser.balance,
      };
    } catch (error) {
      console.log(error);
    }

    return user;
  }
}
