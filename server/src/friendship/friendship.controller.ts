import { Body, Controller, Post } from '@nestjs/common';
import { CreateFriendshipDto } from './dto/create-friendship.dto';
import { FriendshipService } from './friendship.service';

@Controller('friendship')
export class FriendshipController {
  constructor(private readonly friendshipService: FriendshipService) {}

  // POST /friendship
  @Post()
  create(@Body() createFriendshipDto: CreateFriendshipDto) {
    return this.friendshipService.create(createFriendshipDto);
  }
}
