import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Request,
  UploadedFile,
  UseGuards,
  UseInterceptors,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { JwtGuard } from 'src/auth/jwt-auth.guard';
import { FileTypeValidationPipe } from './validation/file-type';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // POST /users
  @Post()
  @UseInterceptors(FileInterceptor('formData'))
  create(@Body(ValidationPipe) createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  // GET /users
  @UseGuards(JwtGuard)
  @Get()
  async findOne(@Request() req) {
    const { username, balance, pic } = await this.usersService.findOne(
      req.user.username,
    );

    return { username, balance, pic };
  }

  @UseGuards(JwtGuard)
  @Put('account-info')
  @UseInterceptors(FileInterceptor('pic'))
  async updatePic(
    @Request() req,
    @UploadedFile(FileTypeValidationPipe)
    profilePic: Express.Multer.File,
  ) {
    const { username, pic, balance } = await this.usersService.updatePic(
      req.user.username,
      profilePic,
    );

    return { username, balance, pic };
  }
}
