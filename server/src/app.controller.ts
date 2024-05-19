import { Controller, Request, UseGuards, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // POST /log-in
  @UseGuards(LocalAuthGuard)
  @Post('log-in')
  login(@Request() req): Request {
    return req.user;
  }
}
