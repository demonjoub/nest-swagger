import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsString, MaxLength, MinLength } from "class-validator"

export class LoginDTO {
  @IsEmail()
  @IsString()
  @MinLength(8)
  @ApiProperty({ type: String, description: "email" })
  email: string

  @IsString()
  @MinLength(4)
  @ApiProperty({ type: String, description: "password" })
  password: string
}

export class RegisterDTO extends LoginDTO {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @ApiProperty()
  username: string;
}

export interface UserResponse {
  email?: string;
  username?: string;
  bio?: string;
  image?: string | null;
}

export interface AuthResponse extends UserResponse {
  token?: string;
}