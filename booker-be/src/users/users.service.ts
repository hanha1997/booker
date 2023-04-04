import { UserDocument } from './models/user.schema';
import { UsersRepository } from './users.repository';
import { GetUserArgs } from './dto/args/get-user-args.dto';
import { CreateUserInput } from './dto/input/create-user-input.dto';
import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { User } from './models/user.model';

@Injectable()
export class UsersService {
    constructor(private readonly UsersRepository: UsersRepository) {

    }

    async createUser(createUserData: CreateUserInput) {
        await this.validateCreateUserData(createUserData);
        const userDocument = await this.UsersRepository.create({
            ...createUserData,
            password: await bcrypt.hash(createUserData.password, 10)
        })  
        return this.toModel(userDocument);

    }

    private async validateCreateUserData(createUserData: CreateUserInput) {
        try {
            await this.UsersRepository.findOne({email: createUserData.email});
            throw new UnprocessableEntityException('Email already exists')
        } catch (error) {
            
        }
    }
    async getUser(getUserArgs: GetUserArgs) {
        const userDocument = await this.UsersRepository.findOne(getUserArgs);
        return this.toModel(userDocument);
    }

    private toModel(UserDocument: UserDocument): User {
        return {
            _id: UserDocument._id.toHexString(),
            email: UserDocument.email
        }
    }
}
