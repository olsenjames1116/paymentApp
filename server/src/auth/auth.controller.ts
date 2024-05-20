import { Controller, UseGuards, Post, Request } from '@nestjs/common';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';

interface AccessToken {
  access_token: string;
}

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // POST /log-in
  @UseGuards(LocalAuthGuard)
  @Post('log-in')
  async login(@Request() req): Promise<AccessToken> {
    return await this.authService.login(req.user);
  }
}
