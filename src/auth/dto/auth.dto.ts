import { ApiProperty } from "@nestjs/swagger";

export class AuthDto {
    @ApiProperty({default: 'john'})
    username: string;
    @ApiProperty({default: 'password'})
    password: string;
}
