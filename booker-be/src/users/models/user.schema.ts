import { AbsTractDocument } from './../../database/abstract.schema';
import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
 
@Schema({versionKey: false})
export class UserDocument extends AbsTractDocument{
    @Prop()
    email: string;

    @Prop()
    password: string;
}
export const UserSchema = SchemaFactory.createForClass(UserDocument)