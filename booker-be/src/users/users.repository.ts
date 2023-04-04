import { User } from './models/user.model';
import { UserDocument } from './models/user.schema';
import { Injectable, Logger } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { AbsTractRepository } from "src/database/abstract.repository";
import { Model } from 'mongoose';

@Injectable()
export class UsersRepository extends AbsTractRepository<UserDocument> {
    protected readonly logger = new  Logger(UsersRepository.name);
    constructor(@InjectModel(User.name) userModel: Model<UserDocument>) {
        super(userModel);
    }
}