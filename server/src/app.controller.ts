import { Controller, Request, UseGuards, Post, Get } from '@nestjs/common';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { JwtGuard } from './auth/jwt-auth.guard';

interface AccessToken {
  access_token: string;
}

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  // POST /log-in
  @UseGuards(LocalAuthGuard)
  @Post('log-in')
  async login(@Request() req): Promise<AccessToken> {
    return await this.authService.login(req.user);
  }

  @UseGuards(JwtGuard)
  @Get('protected')
  getHello(@Request() req): string {
    return req.user;
  }
}
