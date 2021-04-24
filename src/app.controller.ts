import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiBody, ApiResponse } from '@nestjs/swagger'
import { LoginDTO, AuthResponse, RegisterDTO } from './models/user.model';
import { ResponseObject } from './models/response.model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get("/hello")
  @ApiResponse({ status: 200, description: "Health Check", })
  getHelloworld(): string {
    return this.appService.getHello();
  }

  @Post("/login")
  @ApiResponse({ status: 201, description: 'login successfully.' })
  @ApiResponse({ status: 401, description: 'login unauthorized.' })
  @ApiBody({ type: LoginDTO })
  @UsePipes(new ValidationPipe())
  login(
    @Body() credentials: LoginDTO,
  ): ResponseObject<'user', AuthResponse> {
    const user: AuthResponse = {
      bio: 'bio',
      email: credentials.email,
      image: 'image',
      token: 'jwt.token',
      username: 'username'
    }
    return { user }
  }

  @ApiResponse({ status: 201, description: 'register successfully.' })
  @Post("/register")
  @UsePipes(new ValidationPipe())
  register(
    @Body() credentials: RegisterDTO,
  ): ResponseObject<'user', AuthResponse> {
    const user: AuthResponse = {
      bio: 'bio',
      email: credentials.email,
      image: 'image',
      username: credentials.username
    }
    return { user }
  }
}
