import { IsNotEmpty, IsString } from 'class-validator';
import { Match } from './match.decorator';

export class CreateUserDto {
  @IsString({ message: 'Username must be a string.' })
  @IsNotEmpty({ message: 'Username must not be empty.' })
  username: string;

  @IsString({ message: 'Password must be a string.' })
  @IsNotEmpty({ message: 'Password must not be empty.' })
  password: string;

  @IsString({ message: 'Confirmation Password must be a string.' })
  @IsNotEmpty({ message: 'Confirmation password must not be empty.' })
  @Match('password', { message: 'Passwords must match.' })
  confirmPassword: string;
}
