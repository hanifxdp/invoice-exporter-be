import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
    private readonly users = [
        {
        userId: 1,
        username: 'john',
        password: 'password',
        },
        {
        userId: 2,
        username: 'john2',
        password: 'password',
        },
    ];

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }
}
