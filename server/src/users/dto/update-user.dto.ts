import { IsString } from 'class-validator';

export class UpdateUserDto {
  @IsString({ message: 'Balance must be a string' })
  balance: string;
}
