import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class AbstractModel {
    @Field()
    readonly _id: string
}