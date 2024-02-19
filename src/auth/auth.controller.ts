import {
  Body,
  Controller,
  HttpCode,
  Post,
  Get,
  Request,
  HttpStatus,
} from '@nestjs/common';
import { Public } from 'src/auth/decorator/public_decorator';
import { AuthDto } from 'src/auth/dto/auth.dto';
import { AuthService } from 'src/auth/auth.service';
import { User } from 'src/users/users.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('/auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() authDto: AuthDto) {
    return this.authService.signIn(authDto.username, authDto.password);
  }

  @Get('profile')
  getProfile(@Request() req: User) {
    return req.user;
  }
}
