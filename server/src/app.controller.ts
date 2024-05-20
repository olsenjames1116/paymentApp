import { Controller, Request, UseGuards, Get } from '@nestjs/common';
import { JwtGuard } from './auth/jwt-auth.guard';

@Controller()
export class AppController {
  // GET /protected
  @UseGuards(JwtGuard)
  @Get('protected')
  getHello(@Request() req): string {
    return req.user;
  }
}
