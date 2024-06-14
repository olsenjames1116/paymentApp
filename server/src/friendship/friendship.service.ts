import { Injectable } from '@nestjs/common';
import { CreateFriendshipDto } from './dto/create-friendship.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Friendship } from './friendship.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FriendshipService {
  constructor(
    @InjectRepository(Friendship)
    private friendshipRepository: Repository<Friendship>,
  ) {}

  async create(id: string, createFriendshipDto: CreateFriendshipDto) {
    const friendship = {
      user1_id: Number(id),
      user2_id: Number(createFriendshipDto.id),
    };

    const newFriendship = await this.friendshipRepository.save(friendship);

    return { id: newFriendship.id };
  }
}
