import { Prop, Schema } from "@nestjs/mongoose";
import { SchemaTypes, Types } from "mongoose";

@Schema()
export class AbsTractDocument{
    @Prop({type: SchemaTypes.ObjectId })
    _id : Types.ObjectId
}