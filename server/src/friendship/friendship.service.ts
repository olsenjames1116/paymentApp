import { Injectable } from '@nestjs/common';
import { CreateFriendshipDto } from './dto/create-friendship.dto';

@Injectable()
export class FriendshipService {
  async create(createFriendshipDto: CreateFriendshipDto) {
    console.log(createFriendshipDto);
    return 'post friendship';
  }
}
