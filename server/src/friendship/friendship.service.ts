import { Injectable } from '@nestjs/common';
import { CreateFriendshipDto } from './dto/create-friendship.dto';

@Injectable()
export class FriendshipService {
  async create(id: string, createFriendshipDto: CreateFriendshipDto) {
    console.log(id, createFriendshipDto);
    return 'post friendship';
  }
}
