import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userSerivce: UsersService,
    private jwtService: JwtService,
  ) {}
  async signIn(username: string, pass: string) {
    const user = await this.userSerivce.findOne(username);

    if (user?.password != pass) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.userId, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
