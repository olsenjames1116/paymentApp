import { IsNotEmpty, IsString } from 'class-validator';

export class CreateFriendshipDto {
  @IsString({ message: 'Username must be a string.' })
  @IsNotEmpty({ message: 'Username must not be empty.' })
  id: string;
}
