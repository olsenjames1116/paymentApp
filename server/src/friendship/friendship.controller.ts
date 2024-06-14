import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { CreateFriendshipDto } from './dto/create-friendship.dto';
import { FriendshipService } from './friendship.service';
import { JwtGuard } from 'src/auth/jwt-auth.guard';

@Controller('friendship')
export class FriendshipController {
  constructor(private readonly friendshipService: FriendshipService) {}

  // POST /friendship
  @UseGuards(JwtGuard)
  @Post()
  create(@Body() createFriendshipDto: CreateFriendshipDto, @Request() req) {
    return this.friendshipService.create(req.user.id, createFriendshipDto);
  }
}
